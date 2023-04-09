const ServiceItem = (props) => {
  const {link, title} = props;
  return (
    <>
      <li className="service-item">
        <img src={link} alt="" />
        <h3>{title}</h3>
      </li>
    </>
  );
}

export default ServiceItem;