import { LOCAL_HOST } from '../../var';

const registerUser = async (body) => {
    console.log(LOCAL_HOST)
    try {
        const res = await fetch(`http://${LOCAL_HOST}/customer/register`, {
            method: "POST",
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    } catch(e) {
        console.log(e)
    }
}

export default registerUser