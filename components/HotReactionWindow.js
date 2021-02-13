import { useEffect } from 'react';
import Reward from 'react-rewards';

const HotReactionWindow = (props) => {
  const socket = props.socket;

  const showReactions = props.showReactions;

  let reward;
  const generateReaction = () => {
    if (showReactions) reward.rewardMe();
  };

  useEffect(() => {
    socket.on('hot', generateReaction);
    return () => socket.off('hot', generateReaction);
  }, [showReactions]);

  return (
    <Reward
      ref={(ref) => {
        reward = ref;
      }}
      type={'emoji'}
      config={{
        lifetime: 100,
        decay: 1.02,
        startVelocity: 7,
        spread: 10,
        angle: 80,
        elementCount: 1,
        springAnimation: false,
        emoji: [
          "<img style='width:35px; filter: drop-shadow(3px 3px 3px rgba(33,33,33,.2));' src='hot.png'/>",
        ],
      }}
    >
      <div></div>
    </Reward>
  );
};
export default HotReactionWindow;
