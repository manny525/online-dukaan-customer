import { LOCAL_HOST } from '../../var';

const updateCart = async (body, token) => {console.log(LOCAL_HOST)
    try {
        const res = await fetch(`http://${LOCAL_HOST}/carts/update`, {
            method: "PATCH",
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

export default updateCart