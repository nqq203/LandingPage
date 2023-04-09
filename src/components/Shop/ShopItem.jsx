const ShopItem = (props) => {
  const {link, alt, title} = props;
  return (
    <li className="product-item">
      <img src={link} alt={alt} />
      <h3>{title}</h3>
    </li>
  );
}

export default ShopItem;