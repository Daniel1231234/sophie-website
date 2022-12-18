
import './UI.css'
import { IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {CustomModal} from './CustomModal';
import { memo, useState } from 'react';



export const ImgPreview = memo(({ item  }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const contactStyle = { backgroundImage: `url(${item.img})` }

    return (
        <>
        <li style={contactStyle} className='img-preview'>
            <h2 className='img-title'>{item.title}</h2>
            <div className="info"  onClick={handleOpen}>
                {/* <div className='actions'>
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        onClick={() => console.log('pressed!')}
                        aria-label={`info about ${item.title}`}
                    >
                        <InfoIcon  />
                    </IconButton>
                    <h3 onClick={handleOpen}>לפרטים נוספים</h3>
                </div> */}
            </div>
            <CustomModal open={open} handleClose={handleClose}  itemData={item} />
        </li>
        </>
    )
})




