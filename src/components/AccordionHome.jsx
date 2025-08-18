import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './AccordionHome.css'

const AccordionHome = () => {
    return (
        <>
        <Accordion className="accordion">
            <AccordionSummary className="title-accordion" id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon/>}>
                <Typography>🔮 ¿Cómo funciona?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div" className="accordion-options">
                    <ol>
                        <li>Elige una tirada (3 cartas)</li>
                        <li>Consulta el mensaje del tarot</li>
                        <li>Reflexiona sobre tu camino</li>
                    </ol>
                </Typography>
            </AccordionDetails>
        </Accordion>
        </>
    )
}

export default AccordionHome