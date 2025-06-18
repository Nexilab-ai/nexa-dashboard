const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const { prompt } = JSON.parse(event.body);
    const apiKey = process.env.NEXA_API_KEY;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content || "Nessuna risposta";

    return {
      statusCode: 200,
      body: JSON.stringify({ message })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Errore Nexa: " + err.message })
    };
  }
};