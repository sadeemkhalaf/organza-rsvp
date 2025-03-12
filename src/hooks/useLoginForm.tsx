import { useEffect, useMemo, useState } from 'react';

const useLoginForm = () => {

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [fieldsState, setFieldsState] = useState<{ [key: string]: string }>({});
    const [loginState, setLoginState] = useState(fieldsState);

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

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // authenticateUser();
    }

    return {
        fields,
        handleSubmit,
        handleChange,
        errorMessage,
        setErrorMessage,
        loginState,
    };
};

export default useLoginForm;