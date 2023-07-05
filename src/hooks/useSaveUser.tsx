import { ServicesContext } from '@/contexts/servicesContext';
import React, { useState,useContext,useEffect } from 'react'
import useForm, { IUseForm } from './useForm';

export interface IUseSaveUser {
    save: ()=>void; 
    update: ()=>void; 
    deleteUser: ()=>void; 
    reset: ()=>void; 
    form: IUseForm
    error:any
    data:any
    updateData:any
    deleteData: any

}

const useSaveUser = () : IUseSaveUser => {
    const {userCreationService, userUpdateService, userDeleteService} = useContext(ServicesContext)
    const form  = useForm({email:'', password:'', username:''})

    const save = ()=>{
        userCreationService.call(form.state)
    }

    const update = ()=>{
        form.state.Id = form.state._id; 
        userUpdateService.call(form.state)
    }

    const reset = ()=>{
        form.reset();
        userCreationService.reset();
    }

    const deleteUser = ()=>{
        userDeleteService.call(form.state._id)
        form.reset();
    }

    return {
        data: userCreationService.data,
        updateData: userUpdateService.data,
        save,
        update,
        form,
        error: userCreationService.error,
        reset,
        deleteUser,
        deleteData: userDeleteService.data
    }
}

export default useSaveUser