import Title from '../Title/Title';
import LatestItem from './LatestItem';
import './Latest.css';

const Latest = () => {
  return (
    <div className="latest">
      <Title title='OUR LATEST JEWELRY'/>
      <div className='latest-item'>
        <ul>
          <LatestItem link='image/latest-1.png'/>
          <LatestItem link='image/latest-2.png'/>
          <LatestItem link='image/latest-3.png'/>
        </ul>
      </div>
      <button>VIEW GALLERY</button>
    </div>
  );
}

export default Latest;