
import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import db from '@/lib/supabase/db';
import { getUserSubscriptionStatus } from '@/lib/supabase/queries';

const DashboardPage = async () => {

  const supabase = createServerComponentClient({cookies});

  const {
    data:{user},
  } = await supabase.auth.getUser();

  if(!user) return;

  // const workspace = await db.query.workspaces.findFirst(
  //   {
  //     where: (workspace,{ eq }) => eq(workspace.workspaceOwner, user.id),
  //   }
  // );

  // const {
  //   data:subscription,
  //   error: subscriptionError
  // } = await getUserSubscriptionStatus(user.id);

  // if(!workspace){
    return (<div>DashboardPageWorkSpace</div>)
  // }

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage