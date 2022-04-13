export default function (context, inject) {
    const appId = '5ZJ56MSJNL'
    const apiKey = 'ede9a535f8efa3a360545281ab4c9008'
    const apiPathHomes = 'new-index-1649868776'
    const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,
    }

    inject('dataApi', {
        getHome
    })

    async function getHome(homeId) {
        try {
            return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/${apiPathHomes}/${homeId}`, { headers }))
        } catch (error) {
            return getErrorResponse(error)
        }
        
    }

    async function unWrap(response) {
        const json = await response.json()
        const { ok, status, statusText } = response

        console.log(ok, status, statusText)

        return {
            json,
            ok,
            status,
            statusText
        }
    }

    function getErrorResponse(error) {
        return {
            of: false,
            status: 500,
            statusText: error.message,
            json: {}
        }
    }
} 