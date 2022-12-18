import headerImg from "../../assets/header4.jpg"
import CustomMenu from "../UI/CustomMenu"

import { Link } from "@mui/material"
import './header.css'
import { useEffect, useState } from "react"


export const Header = () => {
  const [colorChange, setColorchange] = useState(false);

     const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);


    const onImgCtx = <div className="imgCtx">
        <h1>סופי רחל אבולעפיה</h1>
        <h4>פסיכותרפיסטית, מנחת קבוצות ומטפלת בתנועה</h4>
    </div>

    return (
        <div id="top">
            <div className={colorChange ? 'headerContainer colorChange' : 'headerContainer'}>
            <div  className={colorChange ? 'logo colorChange' : 'logo'}>
                <h2> <Link href="#"  color="inherit" underline="none">סופי רחל אבולעפיה </Link></h2>
            </div>
            <nav className="navigationMenu">
                <ul  className={colorChange ? 'navigationItems colorChange' : 'navigationItems'}>
                    <li><Link href="#about"  color="inherit" underline="none">נעים מאוד </Link></li>        
                    <li><Link href="#skills"  color="inherit" underline="none">תחומי התמחות </Link></li>
                    <li><Link href="#experience"  color="inherit" underline="none">ניסיון תעסוקתי </Link></li>
                    <li><Link href="#recommends"  color="inherit" underline="none">המלצות</Link></li>
                    <li><Link href="#contact" color="inherit" underline="none">צרו קשר </Link></li>
                </ul>
            </nav>
            <CustomMenu />
        </div>
        <div className="mainImage">
            {onImgCtx}
         <img src={headerImg} alt="header-img" />
        </div>
        </div>        
    )
}