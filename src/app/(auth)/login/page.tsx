'use client';

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema } from '@/lib/types';
import Link from 'next/link';
import { Form } from '@/components/ui/form';
import Image from 'next/image';
import addle from '../../../../public/addle.png';


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
          <span className='font-semibold'>addle.co</span>
        </Link>
      </form>
    </Form>
  )
}

export default LoginPage