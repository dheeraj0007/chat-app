const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https:api.chatengine.io/users',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "" } } // give you private key here to connect to chat engine
        )
        return res.status(r.status).json(r.data);
    } catch (err) {
        console.log(err);
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});