"use client";

import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const useLoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldsState, setFieldsState] = useState<{ [key: string]: string }>({});
  const [loginState, setLoginState] = useState(fieldsState);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "", // Ensures inputs start as controlled
      password: "",
    },
  });

  // ✅ Redirect user if already authenticated
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/dashboard"); // Prevent going back to login
    }
  }, [router]);

  const fields = useMemo(
    () => [
      {
        labelText: "Email address",
        labelFor: "email",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address",
      },
      {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password",
      },
    ],
    [],
  );

  useEffect(() => {
    const initialState: any = {};
    fields.forEach((field) => (initialState[field.id] = ""));
    setFieldsState(initialState);
  }, [fields]);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const onSubmit: SubmitHandler<{ email: string; password: string }> = async (
    data,
  ) => {
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        // ✅ Correct API URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // ✅ Use `data` instead of event
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const result = await response.json();
      localStorage.setItem("authToken", result.user.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("refreshToken", JSON.stringify(result.refreshToken));
      setLoading(false);
      router.push("/dashboard");
    } catch (error: any) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  return {
    fields,
    handleSubmit,
    handleChange,
    errorMessage,
    setErrorMessage,
    loginState,
    onSubmit,
    control,
    errors,
    loading,
  };
};

export default useLoginForm;
