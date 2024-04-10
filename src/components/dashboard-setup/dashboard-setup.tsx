'use client'

import { AuthUser } from '@supabase/supabase-js'
import React, { useState } from 'react'
import { CreateWorkspaceSchema } from '@/lib/types';
import { z } from 'zod';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '../ui/card';
import EmojiPicker from '../global/emoji-picker';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Subscription } from '@/lib/supabase/supabase.types';

interface DashboardSetupProps{
  user: AuthUser;
  subscription: Subscription | null;
}

const DashboardSetup:React.FC<DashboardSetupProps> = ({
  user,
  subscription
}) => { 

  const [selectedEmoji, setSelectedEmoji] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState:{
      isSubmitting:isLoading,errors
    }} = useForm<z.infer<typeof CreateWorkspaceSchema>>(
    {
      mode:'onChange',
      defaultValues:{
        logo:'',
        workspaceName:'',
      }
    }
  )

  const onSubmit:SubmitHandler<z.infer<typeof CreateWorkspaceSchema>> = async (value) => {
    const file = value.logo?.[0];
    let filePath = null;
  }


  return (
    <Card
      className='w-[800px] h-screen sm:h-auto'
    >
      <CardHeader>
        <CardTitle>
          Create Workspace
        </CardTitle>
        <CardDescription>
          Lets create a private workspace to get you started. you can add collaborators later from the workspace settings Tab.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={() => {}}>
          <div
            className='flex flex-col gap-4'
          >
            <div
              className='flex items-center gap-4'
            > 
              <div className='text-5xl'>
                <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>
                  {selectedEmoji}
                </EmojiPicker>
              </div>
              <div className='w-full'>
                <Label htmlFor='workspaceName' className='text-sm text-muted-foreground'>
                  Name
                </Label>
                <Input 
                  id='workspaceName' 
                  type='text' 
                  placeholder='Workspace Name' 
                  disabled={isLoading}
                  className='bg-transparent'
                  {...register('workspaceName', {required:'Workspace Name is Required.'})}  
                />
                <small className='text-red-600'>
                  {errors?.workspaceName?.message?.toString()}
                </small>
              </div>
            </div>
            <div>
              <Label htmlFor='logo' className='text-sm text-muted-foreground'>
                  Workspace Logo
                </Label>
                <Input 
                  id='logo' 
                  type='file'
                  accept='image/*' 
                  placeholder='Workspace Name' 
                  disabled={isLoading || subscription?.status !== 'active'}
                  className='bg-transparent'
                  {...register('logo', {required:'Workspace Name is Required.'})}  
                />
                <small className='text-red-600'>
                  {errors?.logo?.message?.toString()}
                </small>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default DashboardSetup;