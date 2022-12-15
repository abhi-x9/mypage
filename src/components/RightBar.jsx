import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { feedData } from "./data/Feeddata";
import React from "react";

export default function RightBar(){

    return (
        <Box 
        flex={1} 
        p={2}
        sx={{ display: { xs: "none", sm: "block"} }}>
        <Box position="fixed" width={300} >
            <Typography variant="h6" fontWeight={100} mt={2} mb={1}>Online Friends</Typography>
            <AvatarGroup max={4} sx={{ cursor: "pointer" }}>
                {avatarData.map((item, index) => (
                    <Avatar 
                    key={index}
                    alt={item.alt}
                    src={item.avatarUrl}
                     />
                ))}
            </AvatarGroup>
            <Typography variant="h6" fontWeight={100} mt={2} mb={1}>Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100} >
                {feedData.map((item, index) => (
                
                    <ImageListItem key={item.id}>
                    <img 
                        src={item.imageUrl}
                        alt={item.imageAlt}
                    />
                </ImageListItem>
               
                ))}
           </ImageList>
            <Typography variant="h6" fontWeight={100} mt={2} mb={1}>Latest Conversations</Typography>
   
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}  >
      
        { userList.map((item) => (
                <ListItem alignItems="flex-start" key={item.id}>
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={item.avatarUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.typography}
                      </Typography>
                      {item.objText}
                    </React.Fragment>
                  }
                />
              </ListItem>
             
        ))}
         <Divider variant="inset" component="li" />
   </List>
        </Box>
        </Box>
    )
};

export const avatarData= [
    {
        id: 1,
        avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
        alt: "Jhon" 
    },
    {
        id: 2,
        avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
        alt: "Moneky" 
    },
    {
        id: 3,
        avatarUrl: "https://mui.com/static/images/avatar3.jpg",
        alt: "Goody" 
    },
];

const userList = [ 
    {
        id: 1,
        avatarUrl: "https://mui.com/static/images/avatar1.jpg",
        typography: "Sandra Adams",
        primary: "Brunch this weekend?",
        objText: "— I'll be in your neighborhood doing errands this…"
    },
    {
        id: 2,
        avatarUrl: "https://mui.com/static/images/avatar2.jpg",
        typography: "to Scott, Alex, Jennifer",
        objText: "— Wish I could come, but I'm out of town this…",
        primary: 'Summer BBQ'
    }, 
    {
        id: 3,
        avatarUrl: "https://mui.com/static/images/avatar3.jpg",
        typography: "Ali Connors",
        primary: 'Oui Oui',
        objText: "— Do you have Paris recommendations? Have you ever…"
    }, 
]