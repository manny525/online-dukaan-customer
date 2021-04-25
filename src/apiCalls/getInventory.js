import { LOCAL_HOST } from '../../var';

const getInventory = async (token, merchantId) => {
    console.log(LOCAL_HOST)
    const url = `http://${LOCAL_HOST}/inventory/customer?merchantId=${merchantId}`
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const inventory = await res.json()
        console.log(inventory)
        return inventory
    } catch(e) {
        console.log(e)
    }
}

export default getInventory