import React from "react";
import {   Mail, Notifications, Pets, } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function NavBar(){
    const [ open, setOpen ] = React.useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"}}}>
                    Cool Dev
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none"}}}/>
                <SearchBox>
                    <InputBase placeholder="Search..." />
                </SearchBox>
                <Icons>
                   <Badge badgeContent={4} color="error">
                        <Mail />
                   </Badge>
                   <Badge badgeContent={2} color="error">
                        <Notifications />
                   </Badge>
                   <Avatar 
                   alt="Remy Sharp" 
                   src="https://mui.com/static/images/avatar/2.jpg" 
                   onClick={(e) => setOpen(true)}
                   />
                    
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar alt="Remy Sharp" 
                    src="https://mui.com/static/images/avatar/2.jpg"
                    
                    />
                    <Typography variant="h6">Abhi</Typography>
                </UserBox>
                <Menu
                id="basic-menu"
                open={open}
                onClose={(e) => setOpen(false)}
                sx={{ top: "50px"}}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",  
                    horizontal: "right",
                }}
                >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
            </StyledToolBar>
        </AppBar>
    )
};


const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const SearchBox = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));
const Icons = styled(Box)(({ theme }) => ({
   display: "none",
   gap: "20px",
   alignItems: "center",
   [theme.breakpoints.up("sm")]: {
    display: "flex"
   }
}));
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
       }
 }));
 

