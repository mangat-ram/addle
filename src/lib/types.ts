import { z } from "zod";

export const FormSchema = z.object(
    {
      email: z.string().describe('Email').email({message: 'Invalid  Email'}),
      password: z.string().describe('Password').min(1, 'Password is Required'),
    }
  )

export const CreateWorkspaceSchema = z.object(
  {
    workspaceName: z
      .string()
      .describe('Workspace Name')
      .min(1,'workspace name must be of one letter'),
    logo: z.any(),
  }
);
