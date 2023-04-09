import Title from '../Title/Title';
import ServiceItem from './ServiceItem';
import './Services.css'

const Services = () => {
  return (
    <div className="services">
      <Title title='OUR SERVICES'/>
      <div className='service-img-item'>
        <ul>
          <ServiceItem link='image/service-1.png' title='JEWELRY REPAIR'/>
          <ServiceItem link='image/service-2.png' title='RING SIZING'/>
          <ServiceItem link='image/service-3.png' title='JEWELRY POLISHING'/>
        </ul>
      </div>
      <button>LEARN MORE</button>
    </div>
  );
}

export default Services 