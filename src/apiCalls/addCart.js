import { LOCAL_HOST } from '../../var';

const addCart = async (body, token) => {console.log(LOCAL_HOST)
    try {
        const res = await fetch(`http://${LOCAL_HOST}/carts/create`, {
            method: "POST",
            body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return await res.json()
    } catch(e) {
        console.log(e)
    }
}

export default addCart