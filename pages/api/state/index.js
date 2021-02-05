export default function handler(req, res) {
  res.status(200).json({ state: "State from API" });
}
