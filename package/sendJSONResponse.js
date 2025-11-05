export const sendJSONResponse = (res, header, statusCode, data) => {
    res.setHeader(Object.keys(header)[0],header['Content-Type'])
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Method', 'GET')
    res.statusCode = statusCode
    res.end(JSON.stringify(data), () => {
        console.log("requested API is displayed")
    })
}