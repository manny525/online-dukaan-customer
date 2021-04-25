import { LOCAL_HOST } from '../../var';

const findUser = async (body) => {
    console.log(LOCAL_HOST)
    try {
        const res = await fetch(`http://${LOCAL_HOST}/customer/findUser`, {
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

export default findUser