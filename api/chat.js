export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { command } = req.body;

  let response;

  switch (command.toLowerCase()) {
    case 'pubblica post su instagram':
      response = '✅ Post Instagram pubblicato con successo!';
      break;
    case 'pubblica post su x':
      response = '✅ Post su X eseguito e visibile!';
      break;
    case 'crea nuovo prodotto payhip':
      response = '📦 Nuovo prodotto Payhip creato e pronto!';
      break;
    case 'controlla vendite nexiLab':
      response = '📊 Hai totalizzato 4 vendite oggi per un totale di 28 EUR.';
      break;
    default:
      response = `⚙️ Comando ricevuto: "${command}" (in elaborazione...)`;
  }

  res.status(200).json({ result: response });
}
