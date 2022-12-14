import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

export default function RightBar(){
    return (
        <Box 
        flex={1} 
        p={2}
        sx={{ display: { xs: "none", sm: "block"}}}>
        <Box position="fixed">
            <Typography variant="h6" fontWeight={100}>
                Online Friends
            </Typography>
            <AvatarGroup max={5}>
            <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/2.jpg" 
             />
            <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/3.jpg" 
            />
            <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/1.jpg" 
            />
            <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/4.jpg" 
             />
            <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/3.jpg" 
            />
            <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/1.jpg" 
            />
            <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/2.jpg" 
             />
            </AvatarGroup>
        </Box>
        </Box>
    )
};