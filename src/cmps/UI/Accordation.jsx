import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'inherit',
  alignItems:'center',
  flexDirection: 'row',
  
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  marginBottom:'2rem'
}));

export default function CustomAccordation(props) {
  const [expanded, setExpanded] = React.useState(false);

 
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='container' style={{marginBlockEnd: '2rem'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{margin:'auto'}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h2 className='marginAuto' style={{height:'0px'}}>{props.title}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:'right', maxWidth:'90%', margin:'auto'}}>{props.desc}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}