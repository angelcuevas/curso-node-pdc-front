import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChatRoomList = ({ list = [] }) => {

    const navigate = useNavigate();

    return <>
        {
            list.map((chatroom:any) => (
                <div key={chatroom.id} className="card m-2">
                    <h5 className="card-header">{chatroom.name}</h5>
                    <div className="card-body">
                        <a href="#" className="btn btn-primary" onClick={()=>navigate(`/chatroom/${chatroom._id}`)}>Enter</a>
                    </div>
                </div>
            ))
        }
    </>
}

export default ChatRoomList