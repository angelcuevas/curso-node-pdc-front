import { IUseUserAuthentication } from '@/hooks/useUserAuthentication'
import React from 'react'

interface IProps {
    userAuthentication: IUseUserAuthentication
    setIsRegistering:React.Dispatch<React.SetStateAction<boolean>>
}

const SignIn = ({userAuthentication,setIsRegistering}:IProps) => {
    return <>
        <div className="card m-5" style={{width: "50%"}}>
            
            <div className="card-body">
            <h5 className="card-title">Login</h5>
                {
                    userAuthentication.error ?
                        < div className="alert alert-danger" role="alert" >
                            {userAuthentication.error.message}
                        </div > : null
                }
            <form>

                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" value={userAuthentication.form.state.email} onChange={(e)=>userAuthentication.form.handleChange('email', e.target.value)}/>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>


                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" value={userAuthentication.form.state.password} onChange={(e)=>userAuthentication.form.handleChange('password', e.target.value)} />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>




                <button type="button" className="btn btn-primary btn-block mb-4" onClick={()=>userAuthentication.login()}>Sign in</button>


                <div className="text-center">
                    <p>Not a member? <a href="#!" onClick={()=>setIsRegistering(true)}>Register</a></p>
                </div>
            </form>
            </div>
        </div>
    </>
}

export default SignIn