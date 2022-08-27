import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Handle from "./Handle";
import Action from "./Action";



function Tweet(props) {
  console.log('voici le props', props)
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <span className="user">
            <User user={props.tweet.user.name}/>
            <Handle handle={props.tweet.user.handle}/>
            <Timestamp timestamp={props.tweet.timestamp}/>
          </span>

          <Message message={props.tweet.message}/>

          <Action/>

          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  );
}

export default Tweet;