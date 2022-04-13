export default function (context, inject) {
    const appId = '5ZJ56MSJNL'
    const apiKey = 'ede9a535f8efa3a360545281ab4c9008'
    const apiPathHomes = 'new-index-1649868776'

    inject('dataApi', {
        getHome
    })

    async function getHome(homeId) {
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/${apiPathHomes}/${homeId}`, {
            headers: {
                'X-Algolia-API-Key': apiKey,
                'X-Algolia-Application-Id': appId,
            }
        })
        const json = await response.json()
        return json
    }
} 