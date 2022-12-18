import * as React from 'react';
import './UI.css'
// import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '72%',
  height:'75%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: '2px 2px 10px #000',
  padding: 4,
  title: {
    textAlign: 'center',
    fontSize: '1.5rem',
    padding: '.5rem',
    marginBottom:'16px'
  },
  btn: {
    position: 'absolute',
    bottom: '10px',
    margin:'auto'
  }
};



export const CustomModal = ({open, handleClose, itemData}) => {
  
  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
        <div className="modal-container">
          <h2 id="transition-modal-title" className='title'>{itemData.title}</h2>
            <Box className='modal-ctx'>
              <div style={{width:'500px'}} className="mainImg-container">
                <img src={itemData?.mainImg} alt="" />
              </div>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {itemData.modalCtx}
              </Typography>
              <Button onClick={handleClose}  className='btn' >סגור</Button>
            </Box>
          </div>
        </Fade>
      </Modal>
  );
}






// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';



// export default function CustomModal({open, handleClose, item}) {

//   const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }