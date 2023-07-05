import React from 'react'

const MessageList = ({ messages = [{},{},{},{}], ownUserName='' }: any) => {


    return <>
        <ul className="list-group">
            {
                messages.map((message:any, index:number) => {

                    const isOwnMessage= message.username == ownUserName
                    let extraStyle :any= {float:'left !important'}
                    if(isOwnMessage){
                        extraStyle.float = 'right !important'
                    }

                    return <li key={`${message}-${index}`} className={`list-group-item   ${ isOwnMessage? 'align-items-end' : 'align-items-start'}`}>
                        <div>
                            <div  > 
                                <div className="fw-bold">{message.username} </div>
                                {message.message}
                            </div>
                        </div>
                    </li>
                })
            }

        </ul>
    </>
}

export default MessageList