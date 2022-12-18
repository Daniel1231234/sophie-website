import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

import "./Recommends.css"
import { useReavel } from '../../hooks/useReveal'

export const Recommends = () => {
 useReavel()

  const recommendsDemo = [
        {
            name: "אופיר מזרחי",
            description: "כנראה המטפלת הכי טובה בעולם שיואו"
        },
        {
            name: "אדיר מילר",
            description: "מהממת! אני מתה"
        },
        {
            name: "שוקי וויס",
            description: "!אין, אין כאלה"
        }
    ]

    return (
        <section id="recommends">
            <div className='container reveal'>
                <h2 className='textCenter' style={{marginBottom:'3rem', color:'brown'}}>המלצות</h2>
                <Carousel
                    animation="slide" duration={1000}
                    indicatorIconButtonProps={{ style: { padding: '10px', color: '#863A6F' } }}
                    activeIndicatorIconButtonProps={{ style: {backgroundColor: '#FFADBC'}}}                       
                    indicatorContainerProps={{ style: {marginTop: '50px', textAlign: 'center' }}}>
                    {recommendsDemo.map((item, i) => <Item key={i} item={item} />)}                        
                </Carousel>
            </div>
        </section>
    )
} 

function Item(props)
{
    return (
        <Paper className='textCenter rec-ctx' sx={{padding:'5rem',backgroundColor: 'lightblue', borderRadius:'50%'}}>
            <h2 className='textCenter' style={{marginBlockEnd:'2rem', fontSize:'2em'}}>{props.item.name}</h2>
            <p  className='textCenter'>{props.item.description}</p>
        </Paper>
    )
}