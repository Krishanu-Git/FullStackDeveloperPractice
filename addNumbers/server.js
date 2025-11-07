import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { sendResponse } from './sendResponse.js'

const PORT = 21334

const server = http.createServer((req, res) => {
    console.log(`URL: ${req.url} and method: ${req.method}`)
    const url = req.url
    const method = req.method

    const __dirname = import.meta.dirname
    const publicDir = path.join(__dirname, 'public')

    if (url === '/index.css'){
        const cssDir = path.join(publicDir, 'index.css')
        const content = fs.readFileSync(cssDir)
        sendResponse(res, 200, 'text/css', content)
    }
    else if (url === '/index.js'){
        const jsDir = path.join(publicDir, 'index.js')
        const content = fs.readFileSync(jsDir)
        sendResponse(res, 200, 'application/javascript', content)
    }
    else if (url === '/index.html'){
        const htmlDir = path.join(publicDir, 'index.html')
        const content = fs.readFileSync(htmlDir)
        sendResponse(res, 200, 'text/html', content)
    }

    else if (url === '/add'){
    // --- 1. Handle OPTIONS (Preflight) ---
    if (method === 'OPTIONS'){
        // 1. Set the necessary CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins for testing
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // List the methods you allow
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header
        
        // 2. Respond with 204 No Content for a successful preflight
        res.writeHead(204); 
        // 3. IMPORTANT: Stop execution and send the response immediately
        return res.end(); 
    }
    
    // --- 2. Handle GET ---
    else if (method === 'GET'){
        const htmlDir = path.join(publicDir, 'index.html')
        const content = fs.readFileSync(htmlDir)
        sendResponse(res, 200, 'text/html', content)
    }
    
    // --- 3. Handle POST ---
    else if (method === 'POST'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        });

        req.on('end', () => {
            console.log(`Requested post data: ${body}`)
            
            try {
                // ... (Parsing and calculation logic goes here) ...
                const data = JSON.parse(body);
                const calculatedSum = Number(data.num1) + Number(data.num2);
                
                const responseData = { 
                    message: 'Sum calculated successfully', 
                    sum: calculatedSum 
                };
                
                // You MUST include CORS headers on the POST response too, if cross-origin
                res.writeHead(200, { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' 
                });
                res.end(JSON.stringify(responseData));

            } catch (e) {
                console.error('Error in POST data handling:', e);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid data' }));
            }
        });
    }
}
    else{
        const content = `<html>
            <h1>
                The page is not found
            </h1>
        </html>`
        sendResponse(res, 404, 'text/html', content)
    }
})

server.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`))