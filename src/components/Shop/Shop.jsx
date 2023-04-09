import './Shop.css';
import ShopItem from './ShopItem';
import Title from '../Title/Title';

const Shop = () => {
  return (
    <div className="shop">
      <Title title='SHOP BY JEWELRY TYPE'></Title>
      <div className="products">
        <ul>
          <ShopItem link='image/product-1.png' alt='earrings' title='EARRINGS'/>
          <ShopItem link='image/product-2.png' alt='necklaces' title='NECKLACES'/>
          <ShopItem link='image/product-3.png' alt='bracelets' title='BRACELETS'/>
          <ShopItem link='image/product-4.png' alt='all rings' title='ALL RINGS'/>
          <ShopItem link='image/product-5.png' alt='engagement rings' title='ENGAGEMENT RINGS'/>
        </ul>
      </div>
    </div>
  );
}

export default Shop;