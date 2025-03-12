import { useEffect, useMemo, useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const useLoginForm = () => {

    const loginSchema = z.object({
        email: z.string().email("Invalid email format"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
    });

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [fieldsState, setFieldsState] = useState<{ [key: string]: string }>({});
    const [loginState, setLoginState] = useState(fieldsState);
    type LoginFormData = z.infer<typeof loginSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });


    const fields = useMemo(() => [
        {
            labelText: "Email address",
            labelFor: "email",
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            isRequired: true,
            placeholder: "Email address"
        },
        {
            labelText: "Password",
            labelFor: "password",
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            isRequired: true,
            placeholder: "Password"
        }
    ], []);

    useEffect(() => {
        const initialState: any = {};
        fields.forEach(field => initialState[field.id] = '');
        setFieldsState(initialState);
    }, [fields]);



    const handleChange = (e: any) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        // authenticateUser();
    }

    const onSubmit = async (data: LoginFormData) => {
        console.log("Valid Data:", data);
        // Make API call to register
      };

    return {
        fields,
        handleSubmit,
        handleChange,
        errorMessage,
        setErrorMessage,
        loginState,
        handleSubmitForm,
        onSubmit,
        register,
        errors
    };
};

export default useLoginForm;