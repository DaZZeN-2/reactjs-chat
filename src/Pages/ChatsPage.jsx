import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPages = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId='8953563f-429a-4c54-bca2-14fb18dab13d'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPages;
