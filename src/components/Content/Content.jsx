import Shop from "../Shop/Shop";
import Handcraft from "../Handcraft/Handcraft";
import Latest from "../Latest/Latest";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Content = () => {
  return (
    <div className="main-content">
      <Shop /> 
      <Handcraft />
      <Latest />
      <Review />
      <Services />
    </div>
  );
}

export default Content;