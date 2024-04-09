//------------- Login the users

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const url = `${BACKEND_URL}/api/users`;

export const Token = localStorage.getItem('token');
// export const User = JSON.parse(localStorage.getItem('user'));

export const handleLoginUser = async (form)=>{
    try {
        const res = await fetch(`${url}/login`,{
            method:'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(form)
        
        })

        const data = await res.json();
        return data;

    } catch (error) { throw new Error(error)  }
}

export const handleRegisterUser = async (form)=>{
    try {
        const res = await fetch(`${url}/register`,{
            method:'POST',
            body : form
        
        })

        const data = await res.json();
        return data;

    } catch (error) { throw new Error(error)  }
}

//------------check is logged in user
export const handleUserLogged = async ()=>{
    try {
        const res = await fetch(`${url}/getUser`,{
            method:'GET',
            headers : {
                'auth-token':Token
            }       
        })

        const data = await res.json();
        return data;

    } catch (error) { throw new Error(error)  }
}

//------------check is logout
export const handleUserLogout= async ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
}