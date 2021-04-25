import { LOCAL_HOST } from '../../var';

const loginUser = async (body) => {console.log(LOCAL_HOST)
    console.log(body)
    try {
        const res = await fetch(`http://${LOCAL_HOST}/customer/login`, {
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

export default loginUser