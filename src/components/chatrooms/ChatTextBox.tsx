import useForm from '@/hooks/useForm'
import React from 'react'

const ChatTextBox = ({ onSend }:any) => {

    const form = useForm({message:''})

    const handleSend = ()=>{
        form.reset()
        onSend(form.state.message)
    }

    return <>
        <div className="form-floating mt-2">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={form.state.message}
                onChange={(e)=>form.handleChange('message',e.target.value)}
            ></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <div className="d-grid gap-2 mt-3 mb-3">
            <button className="btn btn-primary" type="button" onClick={handleSend}>Send</button>
        </div>

    </>
}

export default ChatTextBox