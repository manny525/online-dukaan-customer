import { LOCAL_HOST } from '../../var';

const findUserByToken = async (token) => {console.log(LOCAL_HOST)
    try {
        const res = await fetch(`http://${LOCAL_HOST}/customer/loginByToken`, {
            method: "POST",
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

export default findUserByToken