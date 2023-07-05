import React from 'react'

const UserList = ({users = [{},{}] }:any) => {
    return <>
        <ul className="list-group">
            {
                users.map((user:any, index:number)=>(
                    <li key={`${user}-${index}`} className="list-group-item">{user}</li>
                ))
            }
            
        </ul>
    </>
}

export default UserList