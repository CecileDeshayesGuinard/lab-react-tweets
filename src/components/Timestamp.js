function Timestamp(props) {
    console.log('timestamp', props)
    return (
        <div className="timestamp">
          <p>{props.timestamp}</p>
        </div>
    );
}

export default Timestamp;