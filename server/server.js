const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors())

app.get('*', async(req, res) => {
    const inputPath = req.path;
    if ( inputPath === "" && inputPath === "/"){
        return res.json({
            success : false,
            message : "Wnter the path"
        })
    }
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com${inputPath}`);
        const data = await response.json();
        // set header
        res.set("x-codedamn-project", "jsonproxyholder");
	    return res.json(data);
    }catch{
        res.json({
            success : false,
            message : "Some Problem Occurs"
        })
    }

})

app.listen(1338, () => {
	console.log('Server listening on port 1338')
})
