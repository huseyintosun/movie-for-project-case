import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid } from '@mui/material';
import { Box } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';



export default function CardComponent() {
    const {recipe} = React.useContext(AuthContext)
    console.log(`recipe`, recipe)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ width: "100%", m: 3 }}>
                {recipe?.map((item) => (
                    <Grid key={item?.id} item xs={4}>
                        <Card sx={{ maxWidth: 345,height:"100%" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item?.i?.imageUrl}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{height: "100px"}}>
                                    {item?.l}
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                    {item?.q}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item?.s}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item?.y}
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Button><Link style={{ textDecoration:"none",color:"inherit"}}to={`details/${item?.id}`}>Learn More</Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
