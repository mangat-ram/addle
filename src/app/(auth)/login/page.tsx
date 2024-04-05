'use client';

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema } from '@/lib/types';
import Link from 'next/link';
import { Form, FormControl, FormDescription, FormField, FormItem } from '@/components/ui/form';
import Image from 'next/image';
import addle from '../../../../public/addle.png';
import { Input } from '@/components/ui/input';


const LoginPage = () => {

  const router = useRouter();
  const [ submitError, setSubmitError ] = useState('');

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: {email:'',password:''}
  })

  const isLoading = form.formState.isSubmitting;
  const onSubmit:SubmitHandler<z.infer<typeof FormSchema>> = async (formData) => {

  }

  return (
    <Form {...form}>
      <form 
        onChange={() => {if(submitError) setSubmitError('')}}
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
        <FormField
          disabled={isLoading}
          control={form.control}
          name='email'
          render={(field) => (
            <FormItem>
            <FormControl>
              <Input type='email' placeholder='Email' {...field} />
            </FormControl>
          </FormItem>
          )}
        >
          
        </FormField>
      </form>
    </Form>
  )
}

export default LoginPage