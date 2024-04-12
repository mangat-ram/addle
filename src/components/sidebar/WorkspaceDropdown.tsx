import React from 'react'
import { workspace } from '@/lib/supabase/supabase.types';

interface WorkspaceDropdownProps {
  privateWorkspaces : workspace[] | [];
  sharedWorkspaces: workspace[] | [];
  collaboratingWorkspaces : workspace[] | [];
  defaultValues: workspace | undefined;
}

const WorkspaceDropdown:React.FC<WorkspaceDropdownProps> = ({
  privateWorkspaces,
  sharedWorkspaces,
  collaboratingWorkspaces
}) => {
  return (
    <div>WorkspaceDropdown</div>
  )
}

export default WorkspaceDropdown