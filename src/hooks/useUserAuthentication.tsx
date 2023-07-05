import { ServicesContext } from '@/contexts/servicesContext';
import React,{useContext, useState, useEffect} from 'react'
import useForm, { IUseForm } from './useForm';

export interface IUseUserAuthentication {
    isUserLoggedIn: boolean 
    login:()=>void; 
    form: IUseForm
    error: any 
    logout: ()=>void 
    user: any
    setUser: React.Dispatch<React.SetStateAction<null>>
}

const useUserAuthentication = () :IUseUserAuthentication => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    const {loginService} = useContext(ServicesContext)
    const form  = useForm({email:'', password:''})
    const [user, setUser] = useState(null)

    const login = ()=>{
        loginService.call(form.state)
    }

    const logout = ()=>{
        loginService.reset();
        setUser(null)
        setIsUserLoggedIn(false)
        form.reset();
        localStorage.setItem('token', '')
    }

    useEffect(()=>{
        if(loginService.data && !loginService.error){
            localStorage.setItem('token', loginService.data.token)
            setIsUserLoggedIn(true)
            setUser(loginService.data.user)
        }
    },[loginService.data])

    return {
        isUserLoggedIn,
        login,
        form,
        error: loginService.error,
        logout,
        user,
        setUser
    }
}

export default useUserAuthentication