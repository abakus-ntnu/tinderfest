import Info from "../components/Info";
import MessageInput from "../components/MessageInput";
import useSWR from "swr";
import MessageList from "../components/MessageList";
import Hot from "../components/Hot";
import Not from "../components/Not";
import Stream from "../components/Stream";
import styles from "./index.module.css";
import { Helmet } from 'react-helmet'

// Socket
import socketIOClient from "socket.io-client";
import HotReactionWindow from "../components/HotReactionWindow";
import NotReactionWindow from "../components/NotReactionWindow";

const socket = socketIOClient(process.env.NEXT_PUBLIC_SOCKET_URL);

const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR("/api/state", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (<div className={styles.container}>
    <Helmet>
      <title>{ "tinderfest" }</title>
    </Helmet>
    <div className={styles.streamAndMessages}>
      <div className={styles.streamAndVoting}>
        <Stream streamId="zkBpmCPENDU"/>
        <div className={styles.voting}>
          <Hot socket={socket}/>
          <Not socket={socket}/>
        </div>
      </div>
      <div className={styles.chat}>
        <MessageList socket={socket}/>
        <MessageInput/>
      </div>
    </div>

    <HotReactionWindow socket={socket} />
    <NotReactionWindow socket={socket} />

 
    </div>);
}
export default Index;
