import {z} from "zod";

export const JoueurSchema = z.object({
  firstname : z.string({
    required_error : "First name is required"
  }).min(4,{
    message : "Must be at least 4 characters"
  }),
  lastname  : z.string({
    required_error : "Last name is required"
  }).min(4,{
    message : "Must be at least 4 characters"
  }),  
  salary: z
    .string()
    .transform((val) => parseInt(val))
    ,
  goal: z
  .string()
  .transform((val) => parseInt(val)),
  
});

type Login = z.infer<typeof JoueurSchema>;