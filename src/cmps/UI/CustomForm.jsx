// import { Button, TextField } from "@mui/material"
// import { Box } from "@mui/system"

// export const CustomForm = () => {
//     return (
//       <Box component="form"
//         sx={{
//           display: 'flex',
//           backgroundColor: 'white', 
//           flexDirection: 'column', 
//           gap: '7px', 
//           padding: '1rem', 
//           // boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
//         }}>
//         <TextField  id="outlined-multiline-static" label="שם מלא"  />
//         <TextField  id="outlined-multiline-static" label="כתובת אימייל" />
//         <TextField
//             id="outlined-multiline-static" 
//             label="הודעה"
//             multiline
//             rows={3}
//         />
//         <Button variant="contained">שלח</Button>
//       </Box>
//     )
// }

import React from "react";
import { Button, TextField, FormLabel } from "@mui/material";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    margin: "10px",
    width: "90%",
    textAlign: "right"
  },
  label: {
    textAlign: "right"
  },
  button: {
    margin: "10px",
    fontFamily: "'Fredoka',sans-serif"
  }
};

export function CustomForm() {
  return (
    <form style={styles.root} autoComplete="off">
      <TextField
        InputProps={{
          inputProps: {
            dir: "rtl"
          }
        }}
        id="standard-basic"
        label="שם מלא"
        style={styles.input}
      >
        <FormLabel component="label" style={styles.label}>
          שם מלא
        </FormLabel>
      </TextField>
      <TextField
        InputProps={{
          inputProps: {
            dir: "rtl"
          }
        }}
        id="standard-basic"
        label="כתובת אימייל"
        style={styles.input}
      >
        <FormLabel component="label" style={styles.label}>
          כתובת אימייל
        </FormLabel>
      </TextField>
      <TextField
        InputProps={{
          inputProps: {
            dir: "rtl"
          }
        }}
        id="standard-basic"
        label="הודעה"
        style={styles.input}
      >
        <FormLabel component="label" style={styles.label}>
          הודעה
        </FormLabel>
      </TextField>
      <Button size="large" variant="contained" color="secondary" style={styles.button}>
        שלח
      </Button>
    </form>
  );
}


  

