const Comment = (props) => {
  const {para, name} = props;
  return (
    <>
      <div className="comment-item">
        <p className="apos">“</p>
        <p className="cmt"><i>{para}</i></p>
        <p className="name">- <i>{name}</i></p>
      </div>
    </>
  );
}

export default Comment;