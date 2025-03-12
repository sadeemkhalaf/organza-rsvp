'use client';

import React, { Fragment } from 'react'
import { Header } from '@/components/organizms';
import { useLoginForm } from '@/hooks';
import { AnimatedButton, FormExtra, Input } from '@/components';

function Login() {
  const { handleChange, handleSubmit, errorMessage, loginState, fields, onSubmit, register, errors } = useLoginForm();


  return (
    <div className="h-screen max-h-screen w-full relative overflow-hidden justify-center items-center flex" >
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/auth/register"
          />
          <form className="mt-8 space-y-6 min-w-[300px] w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="-space-y-px">
              {
                fields.map(field =>
                  <Fragment key={field.id}>
                    <Input
                      {...register(field.name)}
                      handleChange={handleChange}
                      value={loginState[field.id]}
                      labelText={field.labelText}
                      labelFor={field.labelFor}
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      isRequired={field.isRequired}
                      placeholder={field.placeholder}
                    />
                    {errors[field.name] && <p className="error">{errors[field.name].message}</p>}
                  </Fragment>
                )
              }
            </div>
            <FormExtra />
            {!!errorMessage?.length && <div className='text-red-400 text-xs'>{errorMessage}</div>}
            <AnimatedButton onClick={handleSubmit} title="Login" invalid={errorMessage?.length > 0} size='lg' containerClassName="w-full" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
