import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Tmestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User username={tweet.user.name} userhandle={tweet.user.handle}/>
          <Timestamp timestamp={tweet.timestamp}/>
        </div>

        <Message message={tweet.message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
