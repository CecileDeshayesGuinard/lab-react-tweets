function ProfileImage(props) {
    console.log('Image', props)
    return (
        <div>
          <img
          src={props.image}
          className="profile"
          alt="profile"
          />
        </div>
    );
}

export default ProfileImage;