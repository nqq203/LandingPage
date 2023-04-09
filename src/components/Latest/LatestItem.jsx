const LatestItem = (props) => {
  const link = props.link;
  return (
    <>
      <li className="product-item">
        <img src={link} />
      </li>
    </>
  );
}

export default LatestItem;