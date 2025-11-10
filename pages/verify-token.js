export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, code } = req.body;
  if (!email || !code)
    return res.status(400).json({ error: "Missing email or code" });

  if (
    global.tokenStore &&
    global.tokenStore[email] &&
    global.tokenStore[email] === code
  ) {
    delete global.tokenStore[email];
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ success: false, error: "Invalid code" });
}

