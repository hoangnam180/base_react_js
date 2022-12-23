const Input = () => {
  return (
    <footer>
      <textarea placeholder="Type your message" defaultValue={''} />
      <div className="d-flex">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
          alt="img"
        />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
          alt="img"
        />
        <a href="#">Send</a>
      </div>
    </footer>
  );
};

export default Input;
