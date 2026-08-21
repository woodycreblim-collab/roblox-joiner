export default function handler(req, res) {
    const { placeId, gameInstanceId } = req.query;
    if (!placeId || !gameInstanceId) {
        return res.status(400).json({ error: "Missing parameters" });
    }
    const robloxUrl = `roblox://placelaunchtime?placeId=${placeId}&gameInstanceId=${gameInstanceId}`;
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Join</title><style>body{margin:0;padding:0;height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;align-items:center;justify-content:center;font-family:system-ui,-apple-system,sans-serif}.container{text-align:center}.checkmark{width:80px;height:80px;border-radius:50%;background:#4caf50;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:50px}h1{color:white;margin:0;font-size:28px}</style></head><body><div class="container"><div class="checkmark">✓</div><h1>Successfully Launched!</h1></div><script>setTimeout(() => { window.location.href = "${robloxUrl}"; }, 500);</script></body></html>`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
}
