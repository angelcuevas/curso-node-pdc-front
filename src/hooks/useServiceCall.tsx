import React, {useState} from 'react'

export interface IUseServiceCall {
    call: (...args:any[])=>void
    isLoading:boolean
    data:any
    error:any
    reset: ()=>void; 
}

const useServiceCall = (serviceCall:any) :IUseServiceCall => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)


    const call = (...args:any[])=>{
        setIsLoading(true)

        serviceCall.apply(this,args).then((data:any)=>{
            setData(data)
            setError(null)
        }).catch((err:any)=>{
            setData(null)
            setError(err)
        })
    }

    const reset = ()=>{
        setData(null)
        setError(null)
    }

    return {
        call,
        isLoading,
        data,
        error,
        reset
    }
}

export default useServiceCall