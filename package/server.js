import http from 'node:http'
import { sendJSONResponse } from './sendJSONResponse.js'
console.log('we have a package.json!!!')

const PORT = 8000

const server = http.createServer(async (req,res) =>{
    const response = await fetch("https://api.massive.com/v3/reference/dividends?apiKey=wlhQfx2R3i0tHuFuxOZL6DeLSOZhE9W6")
    const data = await response.json()
    let filterData = null
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)
    console.log(queryObj)
    console.log(req.pathname)
    
    if (urlObj.pathname === '/api' && req.method === 'GET'){
        console.log(urlObj.pathname)
        if ('ticker' in queryObj){
            filterData = data.results.filter(
                data => {
                    return data.ticker === queryObj.ticker
                }
            )
        }
        sendJSONResponse(res,{'Content-Type':'application/json'},200,filterData ? filterData: data)
    }
    else if (req.url.startsWith('/api/ticker/')){
        const ticker = req.url.split('/').pop()
        console.log(data)
        const new_data = await data.results.filter(
            data => {
                return data.ticker === ticker
            }
        )
        sendJSONResponse(res,{'Content-Type':'application/json'},200,new_data)
    }
    else{
        const obj = {
            error: 'not found',
            message: 'The requested route is not found'
        }
        res.statusCode = 404
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify(obj))
    }
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))