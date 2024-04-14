"use client";

import { useSupabaseUser } from '@/lib/providers/supabase-user-provider';
import { User } from '@/lib/supabase/supabase.types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Label } from '../ui/label';

const WorkspaceCreator = () => {

  const { user } = useSupabaseUser();
  const router = useRouter();
  const [permission, setPermission] = useState("private");
  const [title, setTitle] = useState("");
  const [collaborators, setCollaborators] = useState<User[]>([]);

  const addCollaborator = (user: User) => {
    setCollaborators([...collaborators, user]);
  };

  const removeCollaborator = (user: User){
    setCollaborators(collaborators.filter(c => c.id !== user.id));
  };
 
  return (
    <div 
      className="flex gap-4 flex-col"
    >
      <div>
        <Label htmlFor="name" className="text-sm text-muted-foreground" >
          Name
        </Label>
      </div>
    </div>
  )
}

export default WorkspaceCreator;