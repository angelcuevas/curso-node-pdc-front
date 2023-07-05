import { IUseUserAuthentication } from '@/hooks/useUserAuthentication'
import React from 'react'
import {
    Navigate, useNavigate
  } from "react-router-dom";

interface IProps {
    userAuthentication: IUseUserAuthentication
}

const Navbar = ({userAuthentication}:IProps) => {

    const navigate = useNavigate();

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigate('/chatrooms')}>ChatRooms</a>
                        </li>
                       
                    </ul>
                </div>
                <div className="float-end"> <a className="nav-link" href="#" aria-disabled="true" onClick={()=>{navigate('/profile')}}>{userAuthentication.user.username} </a></div>
                <div className="float-end"> <a className="nav-link" href="#" aria-disabled="true" onClick={()=>userAuthentication.logout()}> (Logout)</a></div>
            </div>
        </nav>
    )
}

export default Navbar