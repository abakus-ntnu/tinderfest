import Info from "../components/Info";
import MessageInput from "../components/MessageInput";
import useSWR from "swr";
import MessageList from "../components/MessageList";
import Hot from "../components/Hot";
import Not from "../components/Not";
import style from "./index.module.css";

// Socket
import socketIOClient from "socket.io-client";
import HotReactionWindow from "../components/HotReactionWindow";
import NotReactionWindow from "../components/NotReactionWindow";
const ENTRYPOINT = "ws://localhost:5000";
const socket = socketIOClient(ENTRYPOINT);

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/state", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (<div>
    {/* Missing: everything ;)) */}
    <MessageInput/>
    <MessageList socket={socket}/>
    <div id="voting">
      <Hot socket={socket}/>
      <Not socket={socket}/>
    </div>

    <HotReactionWindow socket={socket} />
    <NotReactionWindow socket={socket} />
    </div>);
}
