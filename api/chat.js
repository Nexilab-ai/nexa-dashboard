export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt mancante' });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Chiave API non trovata nel server' });
  }

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      }),
    });

    const json = await openaiRes.json();

    if (json.error) {
      return res.status(500).json({ error: json.error.message });
    }

    const reply = json.choices?.[0]?.message?.content;
    return res.status(200).json({ result: reply });

  } catch (err) {
    return res.status(500).json({ error: 'Errore durante la richiesta a OpenAI.' });
  }
}
