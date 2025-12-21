import type {Response} from "./interface"

export const loginUser = async (username,password)=>{
  const res = await fetch("/auth/login",{
    method: "POST",
    headers:{"Content-Type":"applications/json"},
    credentials: "include",
    body: JSON.stringify({username,password})
  })
  if(!res.ok){
    const err = await res.json();
      throw new Error(err.message)
  }
  return res.json()
};
export const signUpUser = async (username,email,password):Promise<Response>=>{
    const res = await fetch('/auth/register',{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({username,email,password})
    });
    if (!res.ok){
      const err = await res.json();
      throw new Error(err.message || "Couldn't Sign In")
    }
    return res.json() 
};

export const checkJWT = async()=>{
  const res = await fetch("/auth/check",{
   method:"POST",
   headers:{"Content-Type": "applications/json"},
   credentials: 'include',
   body: JSON.stringify({})
  });
  if (!res.ok){
    const err = await res.json();
    throw new Error(err.message)
  }
  return res.json();
};

export const logOutUser = async()=>{
  const res = await fetch("/auth/logout",{
    
  })
}