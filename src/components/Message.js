function Message(props) {
    console.log('message', props)
    return (
        <div className="message">
          <p>{props.message}</p>
        </div>
    );
}

export default Message;