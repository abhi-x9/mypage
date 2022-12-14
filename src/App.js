import styled from '@emotion/styled';
import { Add, Settings } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "red",
    color: "#fff", 
    "&:hover": {
      backgroundColor: "black",
      
    }
  })
  return (
    <div>
     <Button 
     variant="text" 
     color='primary'
     size='small'

     >
     Text</Button>
      <Button 
     startIcon={ <Settings />}
     variant="contained" 
     color='primary'
     size='small'
     >
      Settings</Button>
      <Button 
     startIcon={ <Add />}
     variant="contained" 
     color='success'
     size='small'
     >
      Add New Post</Button>
      <BlueButton >Unique</BlueButton>
      <Typography variant='h1' component="p">
        It uses h1 style but its a p
      </Typography>
    </div>
  );
}

export default App;
