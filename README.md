# 🎉 Organza RSVP — Elegant Event Invitations & Guest Management

Organza RSVP is a beautifully crafted web application for managing event invitations, guest RSVPs, and event customization. It empowers users to personalize digital invitations, track guest responses in real-time, and deliver a seamless experience to both hosts and attendees.

> Built with [Next.js 15](https://nextjs.org), Firebase, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Features

- 📋 **Multi-step Event Creation**: Select from ready-to-use templates and personalize them step-by-step.
- 📧 **Smart Guest Management**: Invite guests, collect RSVP responses, and track attendance.
- 🔐 **Firebase Authentication**: Secure login and token-based API access using Firebase Auth.
- 🌍 **Public RSVP Pages**: Guests can access event pages without authentication.
- 🎨 **Responsive Templates**: Built-in templates that look great on mobile and desktop.
- 🌐 **Multi-layout Support**: Distinct layouts for dashboard pages and public RSVP routes.
- 💡 **Real-time Firestore Integration**: All data is live and instantly available.
- 📸 **Photographer Recommendations**: Showcase your event with professional visuals.
- ✨ **Smooth Animations**: Using Framer Motion for a polished, interactive experience.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Auth**: Firebase Authentication
- **Database**: Firebase Firestore
- **Design**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next/Image
- **State Management**: React Hooks + local state
- **Hosting**: Vercel

---

## 🧩 Project Structure

```
src/
├── app/
│   ├── api/                 # Route Handlers (App Router)
│   ├── dashboard/           # Authenticated user dashboard
│   ├── [event-title]/...    # Public guest invitation pages
│   └── layout.tsx           # Root layout (Header, Footer)
├── components/              # Shared UI components
│   ├── atoms/               # Buttons, icons, badges
│   ├── forms/               # Input forms & RSVP handling
│   └── templates/           # Event templates
├── hooks/                   # Custom React hooks
├── lib/                     # Firebase config, Axios setup
└── styles/                  # Tailwind and global CSS
```

---

## 🔐 Authentication & API Access

- API routes use **Firebase Auth tokens** for access control.
- Guests access public event pages via dynamic routes (`/[event-title]/[eventId]/[guestId]`).
- Axios instance with interceptors handles **token refreshing** and retries expired requests automatically.

---

## 🧪 Local Development

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setup `.env.local`:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

## 🌍 Deployment

Organza RSVP is fully optimized for deployment on [Vercel](https://vercel.com).

```bash
pnpm build
pnpm start
```

Make sure your environment variables are set in the Vercel dashboard for production.

---

## 🧠 Future Ideas

- 🎯 Event analytics dashboard
- 📬 Email and SMS integration for invites
- 🖼️ Drag-and-drop template builder
- 🧾 Printable guest lists and QR check-ins

---
