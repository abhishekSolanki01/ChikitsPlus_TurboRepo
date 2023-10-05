import { z } from "zod";

export const loginUpInputs = z.object({
    email: z.string().email().min(1).max(18),
    password: z.string().min(5).max(18),
})

export const validateLoginInputs = (payload: any):any => {
    return loginUpInputs.safeParse(payload) 
}