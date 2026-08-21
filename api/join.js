export default async function handler(req, res) {
  const { placeId, gameInstanceId } = req.query;
  
  if (!placeId || !gameInstanceId) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  
  const robloxUrl = `roblox://game/join?placeId=${placeId}&gameInstanceId=${gameInstanceId}`;
  
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Launching</title>
  <style>
    body { display: flex; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: sans-serif; }
    .container { text-align: center; color: white; }
    .checkmark { width: 80px; height: 80px; border: 3px solid white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 48px; }
    h1 { font-size: 28px; margin-bottom: 10px; }
    p { font-size: 16px; opacity: 0.9; }
  </style>
</head>
<body>
  <div class="container">
    <div class="checkmark">✓</div>
    <h1>Successfully Launched!</h1>
    <p>Joining server...</p>
  </div>
  <script>
    window.location.replace('${robloxUrl}');
  </script>
</body>
</html>`;
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
