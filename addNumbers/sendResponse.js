export function sendResponse (res, statusCode, contentType, content) {
    res.statusCode = statusCode
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Content-Type',contentType)
    res.end(content)
}