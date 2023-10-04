import {z} from 'zod';

export const signUpInputs = z.object({
    email: z.string().email().min(1).max(18),
    password: z.string().min(5).max(18),
    firstName: z.string().min(1).max(18), 
    lastName: z.string().max(18).optional(),
    gender: z.string().optional(),
    dob: z.string().optional(),
    contactNumber : z.string().optional(),//.min(10).max(18), 
    userName: z.string().optional(),//.min(1).max(18), 
    address: z.string().min(3).optional()
})

export const validateSignupInputs = (payload: any):any => {
    return signUpInputs.safeParse(payload) 
    // try{
    //     const parsedValue = signUpInputs.safeParse(payload)        
    //     return {status: true, data : parsedValue} ;
    // }catch(err){
    //     console.log("here2", err);
    //     return {status: false, errors : (err as any).issues};
    // }
}

