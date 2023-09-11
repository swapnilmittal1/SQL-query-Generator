import express from 'express';
import axios from 'axios';

const app = express();
const port = 3001;

app.use(express.json());

app.post("/generateSQL", async (req, res) => {
    const prompt = req.body.prompt;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required." });
    }

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/engines/davinci-codex/completions",
            {
                prompt: prompt,
                max_tokens: 100,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.xxxxxxxxx}`,
                },
            }
        );
        const sqlQuery = response.data.choices[0].text.trim();
        res.json({ sqlQuery });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate SQL query" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
