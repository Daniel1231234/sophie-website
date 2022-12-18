import * as React from 'react';
import visitCard from "../../assets/visitcard.jpeg"
import sophieImg from "../../assets/sophie1.jpg"
import './UI.css'
import { ImgPreview } from './ImgPreview';


export function ImgList({ itemData }) {
  return (
    <>
      <ul className='img-list simple-cards-grid clean-list '>
        {itemData.map(item => <ImgPreview
          key={item.id}
          item={item}
        />)}
      </ul>  
    </>
  );
}




