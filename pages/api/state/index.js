const handler = (req, res) => {
  // fetch agenda from mongodb
  // fetch lines from mongog
  res.status(200).json(
    { agenda: [
      {time: "18.00", title: "event1", description: "dette er en ting som skal skje"}, 
      {time: "13.00", title: "event3", description: "dette er en annen ting som skal skje"},
      {time: "17.00", title: "event2", description: "blablabla"},
      {time: "20.00", title: "event4", description: "hei ho"},
    ]});
}
export default handler;
