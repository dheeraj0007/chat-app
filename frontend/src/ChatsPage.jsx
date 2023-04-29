import { PrettyChatWindow } from "react-chat-engine-pretty";
function ChatsPage(props) {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="" // add you project id here from the project created in the www.chatengine.io
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
}

export default ChatsPage;
