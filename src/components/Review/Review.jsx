import Title from '../Title/Title'
import Comment from './Comment';
import './Review.css';

const Review = () => {
  return (
    <div className='review'>
      <Title title='CUSTOMER REVIEWS'/>
      <div className='comment'>
        <Comment para='Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.'
                 name='Nico Jones'/>
        <Comment para='Great quality, and showed they can work through a problem and maintain excellent customer service!!'
                 name='Tracy Willis'/>
        <Comment para='Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.'
                 name='Susana Santos'/>
      </div>
    </div>
  );
}

export default Review;