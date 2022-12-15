import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { feedData } from "./data/Feeddata";

export default function Feed(){
    return (
        
    <Box  flex={2} p={2}>
    
      {feedData.map((item) => (

        <Card key={item.id.toString()}>
          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label={item.label}>
              {item.avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert/>
            </IconButton>
          }
          title={item.title}
          subheader={item.subHeader}
        />
        <CardMedia
        component="img"
        height="350"
        image={item.imageUrl}
        alt={item.imageAlt}
      />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.typography}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <Checkbox icon={ <FavoriteBorder />} checkedIcon={ <Favorite sx={{ color: "red" }}/>}/>
        </IconButton>
        <IconButton aria-label="Share">
          <Share />
        </IconButton>
      </CardActions>
      </Card>

      ))} 
    </Box>
    )
};