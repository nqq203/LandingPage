import './Handcraft.css';
import HandcraftLeft from './Handcraft-left/HandcraftLeft';
import HandcraftRight from './Handcraft-right/HandcraftRight';

const Handcraft = () => {
  return (
    <div className='handcraft'>
      <HandcraftLeft />
      <HandcraftRight />
    </div>
  );
}

export default Handcraft;