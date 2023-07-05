import useUserAuthentication from '@/hooks/useUserAuthentication'
import React, {useEffect} from 'react'
import Navbar from './common/Navbar'
import LoginForm from './login/Login';
import {
    useNavigate,
    Routes,Route
  } from "react-router-dom";
import useSaveUser from '@/hooks/useSaveUser';
import ChatroomsOverView from './chatrooms/ChatroomsOverView';
import ChatView from './chatrooms/ChatView';
import Profile from './common/Profile';

const MainApp = (props) => {

    const userAuthentication = useUserAuthentication();
    const saveUser = useSaveUser();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(userAuthentication.isUserLoggedIn){
            navigate('/chatrooms')
        }
    },[userAuthentication.isUserLoggedIn])

    return <>
        {
            (()=>{
                if(!userAuthentication.isUserLoggedIn){
                    return <LoginForm  userAuthentication={userAuthentication} saveUser={saveUser}/>
                }

                return <><Navbar userAuthentication={userAuthentication}/>
                    <Routes>
                        <Route path='profile' element={<Profile saveUser={saveUser} userAuthentication={userAuthentication}/>} />
                        <Route path='chatrooms' element={<ChatroomsOverView />} />
                        <Route path='chatroom/:id' element={<ChatView userAuthentication={userAuthentication}/>} />
                    </Routes>
                </>
            })()
        }
        
    </>
}

export default MainApp