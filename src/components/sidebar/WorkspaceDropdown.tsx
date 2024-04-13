"use client";

import React, { useEffect, useState } from 'react'
import { workspace } from '@/lib/supabase/supabase.types';
import { workspaces } from '@/lib/supabase/schema';
import SelectedWorkspace from './selectedWorkspace';

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
          {selectedOption ? (
            <SelectedWorkspace workspace={selectedOption} />
            ) : (
              "Select a Workspace"
            )}
        </span>
      </div>
      {isOpen && <div className="origin-top-right absolute w-full rounded-md shadow-md z-50 h-[190px] bg-black/10 backdrop-blur-lg group overflow-scroll border-[1px] border-muted"></div>}
      <div className="rounded-md flex flex-col">
        <div className="!p-2">
          {!!privateWorkspaces.length && (<> 
            <p className="text-muted-foreground">
              Private
            </p>
            <hr />
            {privateWorkspaces.map((option) => 
              <SelectedWorkspace 
                key={option.id} 
                workspace={option} 
                onClick={handleSelect}
              />)}
          </>
        )}
        {!!sharedWorkspaces.length && (
          <>
            <p className="text-muted-foreground">Shared</p>
            <hr />
            {sharedWorkspaces.map((option) => 
              <SelectedWorkspace 
                key={option.id} 
                workspace={option} 
                onClick={handleSelect}
            />)}
          </>
        )}
        {!!collaboratingWorkspaces.length && (
          <>
            <p className="text-muted-foreground">Collaborating</p>
            <hr />
            {collaboratingWorkspaces.map((option) => 
              <SelectedWorkspace 
                key={option.id} 
                workspace={option} 
                onClick={handleSelect}
            />)}
          </>
        )}
        </div>
        <CustomDialogTrigger
          header="Create A Workspace"
          content={<WorkspaceCreator></WorkspaceCreator>}
          description="Workspaces gives you the power to collaborate with others. You can change your workspace privacy settings after creating the workspace too."
        >
          
        </CustomDialogTrigger>
      </div>
    </div>
  )
}

export default WorkspaceDropdown