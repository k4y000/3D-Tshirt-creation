const express = require('express');
const dotenv = require('dotenv').config();

const OpenAI = require('openai');

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

var cors = require('cors')
var corsOptions = {
    origin: "https://3-d-tshirt-creation-client.vercel.app",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

router.use(cors(corsOptions));


export const maxDuration = 45; // This function can run for a maximum of 25 seconds

router.route('/').post( async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
            model:"dall-e-3",
        });

        if(response.data.status) {
            res.status(response.data.status).json({ error: response.data.error })
        } else {
            const image = response.data[0].b64_json;
            res.status(200).json({ photo: image })
        }

    } catch (e) {
        res.status
        console.error(e);
    }
})


module.exports = router;
