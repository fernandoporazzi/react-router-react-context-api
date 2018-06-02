import React from 'react';
import { Link } from 'react-router-dom';

const MinicartItem = ({item}) => {
  const image = item.images.find(image => image.format === 'thumbnail' && image.galleryIndex ===0);

  return <li>
    <Link to={`/p/${item.code}`} title={item.name}>
      <div className="minicart-item-image">
        <img src={image.url} alt={item.name} />
      </div>
      <div className="minicart-item-detail">
        <strong>{item.name}</strong>
        <strong>${item.price.value}</strong>
        <strong>Quantity: {item.quantity}</strong>
      </div>
    </Link>
  </li>
}

export default MinicartItem;