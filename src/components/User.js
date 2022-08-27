function User(props) {
    console.log('user', props)
    return (
        <div>
          <span>{props.user}</span>
        </div>
    );
}

export default User;