import React,{useState} from 'react'

export interface IUseForm {
    state: any, 
    handleChange: (propertyName:string, value:any)=>void; 
    reset: ()=>void;
    setFormState: (formState:any)=>void;
}

const useForm = (initialData:any) :IUseForm => {
    const [form, setForm] = useState<any>(initialData)

    const handleChange = (propertyName:string, value:any)=>{
        const newForm :any = {...form}
        newForm[propertyName] = value 
        setForm(newForm)
    }

    const reset = ()=>{
        setForm(initialData)
    }

    const setFormState = (formState:any)=>{
        setForm(formState)
    }

    return {
        state:form ,
        handleChange,
        reset,
        setFormState
    }
}

export default useForm