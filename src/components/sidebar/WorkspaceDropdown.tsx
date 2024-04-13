"use client";

import React, { useEffect, useState } from 'react'
import { workspace } from '@/lib/supabase/supabase.types';
import { workspaces } from '@/lib/supabase/schema';

interface WorkspaceDropdownProps {
  privateWorkspaces : workspace[] | [];
  sharedWorkspaces: workspace[] | [];
  collaboratingWorkspaces : workspace[] | [];
  defaultValues: workspace[] | undefined;
}

const WorkspaceDropdown:React.FC<WorkspaceDropdownProps> = ({
  privateWorkspaces,
  sharedWorkspaces,
  collaboratingWorkspaces,
  defaultValues
}) => {

  const { dispatch, state} = useAppState();
  const [selectedOption, setSelectedOption] = useState(defaultValues)
  const [isOpen,setIsOpen] = useState(false)

  useEffect(() => {
    if(!state.workspaces.length){
      dispatch({
        type:"SET_WORKSPACES",
        payload:{
          workspaces: [
          ...privateWorkspaces,
          ...sharedWorkspaces,
          ...collaboratingWorkspaces
          ].map((workspace) => ({...workspace,folders: []}))
        }
      })
    }
  },[
      privateWorkspaces,
      sharedWorkspaces,
      collaboratingWorkspaces
    ]
  )

  const handleSelect = (option : workspace[]) => {
    setSelectedOption(option)
    setIsOpen(false)
  };

  return (
    <div
      className="relative inline text-left"
    >
      <div>
        <span onClick={() => setIsOpen(!isOpen)}>
          {selectedOption ? <SelectedWorkspace></SelectedWorkspace> : "">}
        </span>
      </div>
    </div>
  )
}

export default WorkspaceDropdown