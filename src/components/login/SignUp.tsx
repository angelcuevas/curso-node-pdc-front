import { IUseSaveUser } from '@/hooks/useSaveUser'
import { IUseUserAuthentication } from '@/hooks/useUserAuthentication'
import React from 'react'

interface IProps {
    userAuthentication: IUseUserAuthentication
    setIsRegistering:React.Dispatch<React.SetStateAction<boolean>>
    saveUser:IUseSaveUser
}

const SignUp = ({userAuthentication,setIsRegistering, saveUser}:IProps) => {

    const isSuccess = !!saveUser.data; 

    return <>
    <div className="card m-5" style={{width: "50%"}}>
        
        <div className="card-body">
        <h5 className="card-title">Register</h5>
            {
                saveUser.error ?
                    < div className="alert alert-danger" role="alert" >
                        {saveUser.error.message}
                    </div > : null
            }

            {
            saveUser.data ?
                    < div className="alert alert-success" role="alert" >
                        Usuario creado exitosamente
                    </div > : null
            }
        <form>

            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" value={saveUser.form.state.username} onChange={(e)=>saveUser.form.handleChange('username', e.target.value)}/>
                <label className="form-label" htmlFor="form2Example1">Username</label>
            </div>

            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" value={saveUser.form.state.email} onChange={(e)=>saveUser.form.handleChange('email', e.target.value)}/>
                <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>


            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" value={saveUser.form.state.password} onChange={(e)=>saveUser.form.handleChange('password', e.target.value)} />
                <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>


                 
            <button type="button" className="btn btn-secundary btn-block mb-4" onClick={()=>setIsRegistering(false)}>Volver</button>
                
            {!isSuccess &&<button type="button" className="btn btn-primary btn-block mb-4" onClick={()=>saveUser.save()}>Register</button>}
            
            


        </form>
        </div>
    </div>
</>
}

export default SignUp