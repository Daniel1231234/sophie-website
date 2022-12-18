import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton, Link } from '@mui/material';
import { createElement } from 'react';
import './Footer.css'

export const Footer = () => {
    return (
        <div id="footer">
            <footer>
                <h2>סופי רחל אבולעפיה</h2>
                <p>זכויות יוצרים © 2022 כל הזכויות שמורות</p>
                <p className='textCenter'>
                 <Link style={{fontSize:'1rem', fontWeight:'700', fontFamily:"Amatic SC', cursive"}} color="inherit" underline="hover" href="http://www.danielshalem.com">דניאל שלם </Link>
                </p>
                <div className="footer-icons">
                    <IconButton>{createElement(FacebookIcon, {})}</IconButton>
                    <IconButton>{createElement(InstagramIcon, {})}</IconButton>        
                </div>
            </footer>
        </div>
    )
}