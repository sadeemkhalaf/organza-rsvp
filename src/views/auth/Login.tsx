'use client';

import React, { Fragment } from 'react'
import { Header } from '@/components/organizms';
import { useLoginForm } from '@/hooks';
import { AnimatedButton, FormExtra, Input } from '@/components';
import { Controller } from 'react-hook-form';

function Login() {
  const { handleSubmit, errorMessage, fields, onSubmit, control, errors, loading } = useLoginForm();

  return (
    <div className="h-screen max-h-screen w-full relative overflow-hidden justify-center items-center flex" >
      <div className="flex min-h-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/auth/register"
          />
          <form className="relative mt-8 space-y-6 min-w-[300px] w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="-space-y-px">
              {
                fields.map(mappedField =>
                  <Fragment key={mappedField.id}>
                    <Controller
                      name={mappedField.name as "email" | "password"}
                      control={control}
                      render={({ field }) => (
                        <Input
                          handleChange={field.onChange}
                          {...field}
                          value={field.value ?? ""} // Ensure the value is always a string
                          labelText={mappedField.labelText}
                          labelFor={mappedField.labelFor}
                          type={mappedField.type}
                          isRequired={mappedField.isRequired}
                          placeholder={mappedField.placeholder}
                        />
                      )}
                    />
                    {errors[mappedField.name] && <p className="text-orange-400 text-xs">{errors[mappedField.name]?.message}</p>}
                  </Fragment>
                )
              }
            </div>
            <FormExtra />
          </form>
          {errorMessage && <div className="text-orange-400 text-xs">{errorMessage}</div>}
          <div className='w-full flex justify-center'>
            <AnimatedButton loading={loading} onClick={handleSubmit(onSubmit)} title="Login" invalid={errorMessage?.length > 0} size='lg' containerClassName="flex w-full mt-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
