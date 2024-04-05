'use client';

import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react'
import { Form, useForm } from 'react-hook-form';
import { z } from 'zod'

const SignUpFormSchema = z.object(
  {
    email:z.string().describe('Email').email({message:'Invalid Email address'}),
    password:z
      .string()
      .describe('Password')
      .min(6,'Password must be min of six chracters'),
    confirmPassword: z
      .string()
      .describe('Confirm Password')
      .min(6,'minimum six letters required')  
  }
)
  .refine((data) => data.password === data.confirmPassword,{
    message: 'Passwords dont match.',
    path: ['confirmPassword'] 
  });

const SignUp = () => {

  const router = useRouter()
  const searchParams = useSearchParams();
  const [submitError,setSubmitError] = useState('');
  const [confirmation, setConfirmation] = useState(false)


  const exchangeError = useMemo(() => {
    if(!searchParams) return " ";
    return searchParams.get('error_description')

  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(
    () => 
      clsx('bg-primary',{
        'bg-red-500/10':exchangeError,
        'border-red-500/50': exchangeError,
        'text-red-700': exchangeError
      }),
    []
  )

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    mode:'onChange',
    resolver:zodResolver(SignUpFormSchema),
    defaultValues:{email:'',password:'',confirmPassword:''},
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = () => {

  }

  const signUpHandler = () => {}
  return (
    <Form
      {...form}
    >
      <form
        onChange={() => {
          if(submitError) setSubmitError('')
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col'
      >
        <Link 
          href='/'
          className='w-full flex justify-start items-center'
        >
          {/* <Image src={addle} alt="AddleLogo" width={100} height={100} className='m-5' /> */}
          <span className='font-semibold text-4xl first-letter:ml-2'>addle.co</span>
        </Link>
        <FormDescription
            className='text-foreground/60'
        >
          All in One Collaboration and Productivity Platform
        </FormDescription>
        {!confirmation && !exchangeError && 
          <>
            <FormField
            disabled={isLoading}
            control={form.control}
            name='email'
            render={(field) => (
              <FormItem>
              <FormControl>
                <Input type='email' placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name='password'
          render={(field) => (
            <FormItem>
            <FormControl>
              <Input type='password' placeholder='Password' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name='confirmPassword'
          render={(field) => (
            <FormItem>
            <FormControl>
              <Input type='password' placeholder='Confirm Password' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
            <Button 
              type='submit'
              className='w-full p-6'  
            >
              {!isLoading ? 'Create Account' : <Loader />}
            </Button>
          </>
        }
        
        {submitError && <FormMessage>{submitError}</FormMessage>}
        
        <span className='self-container'>
          Already have an Account ?{" "}
          <Link 
            href='/login'
            className='text-primary'
          >
            Login
          </Link>
        </span>
      </form>
    </Form>
  )
}

export default SignUp