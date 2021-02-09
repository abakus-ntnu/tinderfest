import Info from "../components/Info";
import MessageInput from "../components/MessageInput";
import useSWR from "swr";
import MessageList from "../components/MessageList";
import Hot from "../components/Hot";

// Socket
import socketIOClient from "socket.io-client";
import HotReactionWindow from "../components/HotReactionWindow";
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
    <Hot socket={socket}/>
    <HotReactionWindow socket={socket} />
    </div>);
}
