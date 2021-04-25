import { LOCAL_HOST } from '../../var';

const addCard = async (body, token) => {
    console.log(LOCAL_HOST)
    try {
        const res = await fetch(`http://${LOCAL_HOST}/cards/add`, {
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

export default addCard