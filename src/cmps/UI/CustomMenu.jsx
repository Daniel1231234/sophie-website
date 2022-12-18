import {useState} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from '@mui/material';
import menuBtnSvg from "../../assets/menuBtn.svg"
import { MenuBtn } from './MenuBtn';


export default function CustomMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button className='MenuBtn'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
     <MenuBtn className="text-red-700" width='40px' height='40px' />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link href="#about" color="inherit" underline="none">נעים מאוד </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link  href="#skills"  color="inherit" underline="none">תחומי התמחות </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link   href="#experience" color="inherit" underline="none">ניסיון תעסוקתי </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link   href="#recommends" color="inherit" underline="none">המלצות</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="#contact"  color="inherit" underline="none">צרו קשר </Link>
        </MenuItem>
      </Menu>
    </>
  );
}