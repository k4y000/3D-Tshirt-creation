import express from 'express';
import * as dotenv from 'dotenv';

import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

router.route('/').get((req, res) => {
    res.status(200).json({message: "Hello you !"})
})

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

        console.dir(response.data)
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


export default router;