import Information from "./Information";
import Subcribe from "./Subcribe";
import Copyright from "./Copyright";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Subcribe />
      <Information />
      <Copyright />
    </div>
  );
}

export default Footer