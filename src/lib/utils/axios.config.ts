import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { fbApp } from '../../../firebaseConfig';

const auth = getAuth(fbApp);

const axiosInstance = axios.create({
  baseURL: '/api/',
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

// Request interceptor to attach the token
axiosInstance.interceptors.request.use(
    async (config) => {
      const user = auth.currentUser;
  
      if (user) {
        const token = await user.getIdToken(true); // 👈 forces refresh if expired
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        return new Promise((resolve, reject) => {
          onAuthStateChanged(auth, async (user) => {            
            if (user) {
              try {
                const newToken = await user.getIdToken(true);
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                processQueue(null, newToken);
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                resolve(axiosInstance(originalRequest));
              } catch (err) {
                processQueue(err, null);
                reject(err);
              } finally {
                isRefreshing = false;
              }
            } else {
              reject(error);
            }
          });
        });
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token: string) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          },
          reject: (err: any) => {
            reject(err);
          }
        });
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
