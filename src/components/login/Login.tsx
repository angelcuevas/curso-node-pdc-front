import { IUseSaveUser } from '@/hooks/useSaveUser'
import { IUseUserAuthentication } from '@/hooks/useUserAuthentication'
import React, {useState, useEffect} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

interface IProps {
    userAuthentication: IUseUserAuthentication
    saveUser: IUseSaveUser
}

const LoginForm = ({userAuthentication, saveUser}:IProps) => {

    const [isRegistering, setIsRegistering] = useState(false)

    useEffect(()=>{
        if(!isRegistering){
            saveUser.reset();
        }
    },[isRegistering])


    return <>    
        {!isRegistering && <SignIn userAuthentication={userAuthentication} setIsRegistering={setIsRegistering} />}
        {isRegistering && <SignUp userAuthentication={userAuthentication} setIsRegistering={setIsRegistering} saveUser={saveUser} />}
    </>
}

export default LoginForm