function Handle(props) {
    console.log('handle', props)
    return (
        <div>
          <span>{props.handle}</span>
        </div>
    );
}

export default Handle;