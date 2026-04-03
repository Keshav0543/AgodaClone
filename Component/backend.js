import express, { json } from "express";
import cors from "cors";
const app=express();

app.use(cors());//Allow frontend
app.use(express.json());//convert js object into json


app.post("/search", async (req, res) => {
  try {
    const payload = req.body;

    const response = await fetch("https://www.agoda.com/graphql/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "ag-language-locale": "en-in",
        "ag-cid": "1844104",
        "ag-whitelabel-key": "F1A5905F-9620-45E5-9D91-D251C07E0B42",
        "origin": "https://www.agoda.com",
        "referer": "https://www.agoda.com/en-in/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();

    const data=JSON.parse(text);

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});





app.listen(3000,()=>{
    console.log("Server is running on prt: 3000");
})