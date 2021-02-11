import { useEffect, useState } from "react";
import Reward from "react-rewards";

const HotReactionWindow = (props) => {
  const socket = props.socket;

  let reward;
  const generateReaction = () => {
    if (props.showReactions)
      reward.rewardMe();
  };

  useEffect(() => {
    socket.on("hot", generateReaction);
    return () => socket.off("hot", generateReaction);
  }, []);

  return <div>
    <Reward ref={(ref) => {reward = ref}} type={"emoji"} config={
      {
        lifetime: 100,
        decay: 1,
        startVelocity: 7,
        spread: 10,
        angle: 70,
        elementCount: 1,
        springAnimaion: false,
        emoji: ["<img style='width:40px;' src='hot.png'/>"]
      }
      }>
      <div></div> {/*use this when changing style?*/}
    </Reward>
  </div>;
}
export default HotReactionWindow;
