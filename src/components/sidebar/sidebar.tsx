import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react'
import { cookies } from 'next/headers';
import { getCollaboratingWorkspaces, getFolders, getPrivateWorkspaces, getSharedworkspaces, getUserSubscriptionStatus } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import WorkspaceDropdown from './WorkspaceDropdown';

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

  const [privateWorkspaces, collaboratingWorkspaces, sharedWorkspaces] = await Promise.all(
    [
      getPrivateWorkspaces(user.id),
      getCollaboratingWorkspaces(user.id),
      getSharedworkspaces(user.id)
    ]
  )
  //get all the diffrent workspaces
  
  return (
    <aside
      className={twMerge(
        'hidden sm:flex sm:flex-col w-[280px] shrink-0 p-4 md:gap-4 !justify-between',
        className
      )}
    >
      <div>
        <WorkspaceDropdown
          privateWorkspaces={privateWorkspaces}
          sharedWorkspaces={sharedWorkspaces}
          collaboratingWorkspaces={collaboratingWorkspaces}
          defaultValues={[
            ...privateWorkspaces,
            ...sharedWorkspaces,
            ...collaboratingWorkspaces
          ]}
        >
          
        </WorkspaceDropdown>
      </div>
    </aside>
  )
}

export default SideBar