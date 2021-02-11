import Info from "../components/Info";
import MessageInput from "../components/MessageInput";
import useSWR from "swr";
import MessageList from "../components/MessageList";
import Hot from "../components/Hot";
import Not from "../components/Not";
import Stream from "../components/Stream";
import Agenda from "../components/Agenda";
import styles from "./index.module.css";
import { Helmet } from 'react-helmet'

// Socket
import socketIOClient from "socket.io-client";
import HotReactionWindow from "../components/HotReactionWindow";
import NotReactionWindow from "../components/NotReactionWindow";
import { useState } from "react";
import ReactionToggle from "../components/ReactionToggle";

const socket = socketIOClient(process.env.NEXT_PUBLIC_SOCKET_URL);

const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR("/api/state", fetcher);

  const [showReactions, setShowReactions] = useState(true);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data)

  return (<div className={styles.container}>
    <Helmet>
      <title>{ "tinderfest" }</title>
    </Helmet>
    <div className={styles.streamAndMessages}>
      <div className={styles.streamAndVoting}>
        <div style={{display: 'flex', "alignItems": "flexEnd"}}>
          <HotReactionWindow socket={socket} showReactions={showReactions} />
          <Stream streamId="zkBpmCPENDU"/>
          <NotReactionWindow socket={socket} showReactions={showReactions}/>
        </div>
        <div className={styles.voting}>
          <Hot socket={socket}/>
          <ReactionToggle setShowReactions={setShowReactions} showReactions={showReactions}/>
          <Not socket={socket}/>
        </div>
      </div>
      <div className={styles.chat}>
        <MessageList socket={socket}/>
        <MessageInput/>
      </div>
    </div>
    <Agenda agenda={data.agenda}/>

 
    </div>);
}
export default Index;
