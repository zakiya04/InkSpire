import type {Response} from "./interface"

export const loginUser = ()=>{};
export const signUpUser = async (/*username,email,password*/)=>{
    const res = await fetch('/auth/register',{
        method: "POST",
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(/*{username,email,password}*/)
    });
    if (!res.ok){
      const err = await res.json();
      throw new Error(err.message || "Couldn't Sign In")
    }
    return (await res.json()) as Response
};
