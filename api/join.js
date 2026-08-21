export default function handler(req, res) {
  const { placeId, gameInstanceId } = req.query;
  
  if (!placeId || !gameInstanceId) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  
  const robloxUrl = `roblox://game/join?placeId=${placeId}&gameInstanceId=${gameInstanceId}`;
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Launching Roblox</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .card {
      background: white;
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 500px;
    }
    .checkmark {
      width: 80px;
      height: 80px;
      background: #34C759;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      font-size: 48px;
      color: white;
    }
    h1 {
      font-size: 28px;
      color: #34C759;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }
    .info-box {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 15px;
      margin-top: 20px;
      text-align: left;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 14px;
      color: #333;
    }
    .status {
      display: inline-block;
      background: #34C759;
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }
    .close-btn {
      margin-top: 20px;
      padding: 10px 20px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
    }
    .close-btn:hover {
      background: #764ba2;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="checkmark">✓</div>
    <h1>Successfully Launched!</h1>
    <p>Roblox should now be opening on your device.</p>
    
    <div class="info-box">
      <div class="info-row">
        <span>Status</span>
        <span class="status">Connected</span>
      </div>
      <div class="info-row">
        <span>Place ID</span>
        <span>${placeId}</span>
      </div>
    </div>
    
    <button class="close-btn" onclick="window.close()">Close Tab</button>
  </div>
  
  <script>
    function launch() {
      window.location.href = '${robloxUrl}';
    }
    
    // Lance immédiatement
    launch();
    
    // Réessaie après 1 seconde
    setTimeout(launch, 1000);
    
    // Réessaie après 2 secondes
    setTimeout(launch, 2000);
    
    // Réessaie après 3 secondes
    setTimeout(launch, 3000);
  </script>
</body>
</html>`;
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
