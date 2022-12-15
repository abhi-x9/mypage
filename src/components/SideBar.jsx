import {  AutoStories,  Group, Home, LightMode, ModeNight, Person,  Settings, Shop } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";

export default function SideBar({ mode, setMode}){
    return (
        <Box 
        flex={1} 
        p={2}
        sx={{ display: { xs: "none", sm: "block"}}}>
          <Box position="fixed">
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <AutoStories />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Shop />
              </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Person" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                {mode === "light" ? <LightMode color="error"/> : <ModeNight color="primary"/> }
              </ListItemIcon>
              <Switch
              onClick={() => setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
        </Box>
    )
};