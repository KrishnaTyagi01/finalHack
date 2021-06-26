
export const isAuthenticated = ()=>{
    if(typeof window == "undefined"){
        return false
    }

    if(localStorage.getItem('userData'))
    {
        return JSON.parse(localStorage.getItem('userData'))
    }
    else{
        return false;
    }
}

export const logout = () => {
    
    if(typeof window !== "undefined"){
        localStorage.removeItem("userData");

        window.location.reload()
    }

  }