import React from "react";
import { Avatar, Button, ButtonGroup, Fab,  Modal, Stack, styled,  TextField,  Tooltip, Typography } from "@mui/material";
import { Add as AddIcon, EmojiEmotions, Person, VideoCameraBack, Image, DateRange } from "@mui/icons-material";
import { Box } from "@mui/system";

function AddFab(){
    const [ open, setOpen ] = React.useState(false);
    return (
        <>
        <Tooltip
        onClick={() => setOpen(true)}
        sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30}
        }}
        >
        <Fab color="primary" aria-label="Add">
            <AddIcon />
        </Fab>
        </Tooltip>
        <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box p={3} width={280} height={400} bgcolor={"background.default"} color={"text.primary"} borderRadius={10}>
            
        <Typography textAlign="center" variant="h6" color="grey">
            Create Post
        </Typography>
        <UserBox>
        <Avatar 
                alt="No"
                src="https://mui.com/static/images/avatar/2.jpg"
            />
        <Typography variant="h6">
            Jhon dean
        </Typography>
        </UserBox>
        <TextField fullWidth label="Whats on your Mind ?" variant="outlined" />
        <Stack direction="row" gap={3} margin="15px 0" sx={{cursor: "pointer"}}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <Person color="error"/>
        </Stack>
        <ButtonGroup
        fullWidth
        variant="outlined"

        >
            <Button>Post</Button>
            <Button><DateRange /></Button>
        </ButtonGroup>
        </Box>
        </StyledModal>
        </>
    )
}
export default AddFab;


const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "20px 0"
})