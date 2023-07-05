interface apiCallArguments {
    url: string
    method?: string
    body?: any
}

const apiCall = ({ url, method = 'GET', body = null }: apiCallArguments) => {
    const token = localStorage.getItem('token')
    return fetch(url, {
        method,
        headers: {
            "Content-Type": 'application/json',
            "authorization": token
        } as any,
        body: body ? JSON.stringify(body) : undefined
    }).then(async (response:any) => {
        
        if (response.status !== 200) {
            const resp = await response.json()
            throw new Error(''+resp.message)
        }
        return response;
    }).then((response:any)=>response.json())
}

export const apiPost = (url: string, body: any) => {
    return apiCall({ url, method: 'POST', body })
}

export const apiPut = (url: string, body: any) => {
    return apiCall({ url, method: 'PUT', body })
}

export const apiGet = (url: string) => {
    return apiCall({ url })
}

export const apiDelete = (url: string) => {
    return apiCall({ url, method: 'DELETE' })
}