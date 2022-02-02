import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MUITextEditor } from '../MUITextEditor';
import { SelectCategories } from "../SelectCategories";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import CreateIcon from '@mui/icons-material/Create';

import { CreateDiscussionButton } from '../CreateDiscussionButton';

function NewDiscussionForm() {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [ title, setTitle ] = React.useState('');
    const [ category, setCategory ] = React.useState<Number>(1);
    const [ content, setContent ] = React.useState('');
    const [ newDiscussionSucceeded, setNewDiscussionSucceeded ] = React.useState<Boolean>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <React.Fragment>
            { (newDiscussionSucceeded) ?
                <div>
                    <Alert severity="success">Thee creation of the discussion was successful</Alert>
                    <br />
                </div> : null
            } 
            
            <form action="">
                <Container fixed maxWidth="md" sx={{ padding: '0px' }}>
                    
                    <Accordion id="accordionForm" expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{  borderStyle: 'none', padding: '0px', margin: '0px'}} >
                        
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            /* aria-controls="panel1a-content" */
                            id="panel1a-header"
                            sx={{ 
                                height: '4rem',
                                justifyContent: 'flex-end',
                                
                             }}
                            >
                            <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button
                            sx={{ margin: '1rem', background: 'linear-gradient(90deg,#ae4eff,#5f64ff)' }}
                            
                            variant="contained"
                            startIcon={<CreateIcon />}
                            /* onClick={() => {
                                document.getElementById("accordionForm").style.display = "block";
                                handleChange('panel1');
                            }} */
                        >
                            New Discussion
                        </Button>
                    </Box>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    minHeight: '270px',
                                    marginTop: '10px'
                                  }}
                            >
                                <TextField 
                                    id="input-title" 
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    label="Title" 
                                    variant="outlined" 
                                    sx={{ marginBottom: '25px', borderWidth: '2px' }} 
                                />
                                
                                <Box 
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        marginBottom: '25px'
                                    }}
                                >
                                    <SelectCategories />
                                </Box>
                                
                                {/* <div>
                                    <MUITextEditor />
                                </div> */}
                                <TextField
                                    placeholder="Type the content of an discussion here..."
                                    id="input-content"
                                    fullWidth
                                    value={content} 
                                    onChange={(e) => setContent(e.target.value)}
                                    multiline
                                    rows={15}
                                    sx={{ marginBottom: '25px' }}
                                />
                                <Box 
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end', 
                                        marginBottom: '25px'
                                    }}
                                >
                                    <Button 
                                        variant="contained"
                                        sx={{ width: '250px', background: 'linear-gradient(90deg,#ae4eff,#5f64ff)' }}
                                        onClick={() => {
                                            const url = 'https://get-hired-forum-dev.herokuapp.com/api/discussions';
                                            const data = { "title": title, "category": category, "content": content };
                                            console.log(data);
                                            fetch(
                                                url,
                                                {
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify(data),
                                                    method: "POST"
                                                }
                                            )
                                            .then(data => data.json())
                                            .then((json) => {
                                                console.log(JSON.stringify(json));
                                            })
                                            .then(()=>{
                                                setTitle('');
                                                setContent('');
                                                setContent('');
                                                setNewDiscussionSucceeded(true);
                                                setTimeout(() => {
                                                    setNewDiscussionSucceeded(false);
                                                }, 5000);
                                            });
                                        }}
                                    >
                                        Create Discussion
                                    </Button>
                                </Box>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </form>
            <br />
        </React.Fragment>
    );
}

export { NewDiscussionForm };