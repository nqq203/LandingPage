import './Cover.css'

const Cover = () => {
  const imgLink = 'image/cover.png';
  return (
    <div className="cover">
      <img className='cover-photo' src={imgLink} alt="Cover-photo"/>
    </div>
  );
}

export default Cover