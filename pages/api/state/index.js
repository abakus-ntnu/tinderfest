const handler = (req, res) => {
  // fetch agenda from mongodb
  // fetch lines from mongog
  res.status(200).json({ agenda: [{time: "18:00", text: "Noe som skjer"}], lines: ["line1", "line2"] });
}
export default handler;
