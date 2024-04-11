import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react'
import { cookies } from 'next/headers';
import { getFolders, getUserSubscriptionStatus } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';

interface SideBarProps {
  params: {workspaceId : string};
  className? : string;
}

const SideBar:React.FC<SideBarProps> = async ({ params, className }) => {

  const supabase = createServerComponentClient({cookies}) 
  //if there is a user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if(!user) return;

  //sub status
  const { 
    data: subscriptionData, 
    error: subscriptionError
  } = await getUserSubscriptionStatus(user.id);

  //folders
  const {
    data: workspaceFolderData,
    error: foldersError
  } = await getFolders(params.workspaceId);

  //errors
  if(subscriptionError || foldersError) redirect('/dashboard')
  //get all the diffrent workspaces
  return (
    <div>SideBar</div>
  )
}

export default SideBar