import * as z from "zod";

export interface IPlayer {
  firstName: string;
  lastName: string;
  goal: number;
  salary: bigint;
  pictureURl: string;
  devise: string;
  id: string;
}

export interface IAction {
  name: string;
  icon: React.ReactElement;
}

export const playerSchema = z.object({
  id: z.number().optional(),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  salary: z.number(),
  goal: z.number(),
  devise: z.string().min(1),
  pictureURL: z.string().optional(),
});

export type TPlayerSchema = z.infer<typeof playerSchema>;

export type TFormProps = {
  endPoint: string;
  defaultValues?: FieldValues;
};
