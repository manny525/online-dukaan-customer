import { LOCAL_HOST } from '../../var';

const getMerchant = async (body) => {
    console.log(LOCAL_HOST)
    const url = `http://${LOCAL_HOST}/search?postalCode=${body.postalCode}&lat=${body.lat}&lon=${body.lon}&typeOfMerchant=${body.typeOfMerchant}`
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${body.token}`
            }
        })
        return await res.json()
    } catch(e) {
        console.log(e)
    }
}

export default getMerchant