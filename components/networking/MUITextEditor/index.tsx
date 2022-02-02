import React from "react";

import { createTheme } from "@mui/material/styles";

import MUIRichTextEditor from 'mui-rte';

const save = (data) => {
    console.log(JSON.parse(data));
    
  };
  
  const myTheme = createTheme({
    // Set up your custom MUI theme here
    
  });

function MUITextEditor() {
    return (
        <React.Fragment>
            <div style={{ 
                border: '2px solid gray',
                borderRadius: '5px',
                padding: '0 10px',
                paddingBottom: '2rem'
            }}>
                {/* <ThemeProvider theme={myTheme}> */}
                    <MUIRichTextEditor
                    label="Type the content of an discussion here..."
                    onSave={save}
                    />
                {/* </ThemeProvider> */}

            </div>
        </React.Fragment>
    );
    
}

export { MUITextEditor };