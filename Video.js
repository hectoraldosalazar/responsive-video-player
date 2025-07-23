function Video({src}) {
  //Passing video src prop, so it renders src
    return (
      <div>
        <video 
        controls autostart autoPlay muted
        src={src}
        />
      </div>
    );
};
export default Video;
