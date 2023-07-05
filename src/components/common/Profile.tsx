import { IUseSaveUser } from '@/hooks/useSaveUser'
import { IUseUserAuthentication } from '@/hooks/useUserAuthentication'
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
    saveUser: IUseSaveUser
    userAuthentication: IUseUserAuthentication
}

const Profile = ({ saveUser, userAuthentication }: IProps) => {
    
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const isSuccess = !!saveUser.data;
    
    const { user } = userAuthentication; 

    const navigate = useNavigate()

    useEffect(()=>{
        saveUser.form.setFormState(user)
    },[])

    useEffect(()=>{
        if(saveUser.updateData){
            userAuthentication.setUser(saveUser.updateData.payload)
            setIsEditing(false);
        }
    },[saveUser.updateData])

    useEffect(()=>{
        if(saveUser.deleteData){
            setIsEditing(false);
            userAuthentication.logout()
            
        }
    },[saveUser.deleteData])

    return <>
        <div className="card m-5" style={{ width: "50%" }}>

            <div className="card-body">
                <h5 className="card-title">My Profile</h5>
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
                        <input type="email" id="form2Example1" className="form-control" disabled={!isEditing} value={saveUser.form.state.username} onChange={(e) => saveUser.form.handleChange('username', e.target.value)} />
                        <label className="form-label" htmlFor="form2Example1">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" disabled={!isEditing} value={saveUser.form.state.email} onChange={(e) => saveUser.form.handleChange('email', e.target.value)} />
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>


                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" disabled={!isEditing} value={saveUser.form.state.password} onChange={(e) => saveUser.form.handleChange('password', e.target.value)} />
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>



                    <button type="button" className="btn btn-secundary btn-block mb-4" onClick={() => navigate('/chatrooms')}>Volver</button>

                    {!isEditing && <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => setIsEditing(true)}>Editar</button>}
                    {isEditing && <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => {saveUser.update(); }}>Guardar Cambios</button>}

                    <div>
                        <button type="button" style={{marginTop: '50px'}} className="btn btn-warning btn-block mt-10" onClick={() => saveUser.deleteUser()}>Borrar usuario</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Profile