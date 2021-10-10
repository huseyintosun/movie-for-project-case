import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { ArrowBackRounded } from '@mui/icons-material';

export default function Details() {
    const history = useHistory()
    const { id } = useParams()
    const { recipe } = React.useContext(AuthContext);
    function filterById(item) {
        if (item?.id === id) {
            return true;
        }
    }
    const arrById = recipe?.filter(filterById)[0];
    // console.log('Filtered Array\n', arrById)
    // Filtered Array
    return (
        <Card
            key={arrById?.id}
            height="100%"
            sx={{ maxWidth: "80%", textAlign: "center", justifyContent: "center", m: "10%", mt: 0 }}>
            <CardMedia
                component="img"
                height="%50"
                src={arrById?.i?.imageUrl}
                alt={arrById?.l}
            />
            <Typography gutterBottom variant="h4" component="div">
                {arrById?.l}
            </Typography>
            <CardContent
                height="%100">
                <Typography variant="body1">
                    {arrById?.q}
                </Typography>
                <Typography variant="body1">
                    {arrById?.s}
                </Typography>
                <Typography variant="body1">
                    Rank : {arrById?.rank}
                </Typography>
            </CardContent>
            {!arrById?.v ? null : arrById?.v?.map((item) => (
                <div key={item?.id}>
                    <CardMedia
                        component="img"
                        height="%50"
                        src={item?.i?.imageUrl}
                        alt={item?.l}
                    />
                    <Typography gutterBottom variant="h6" component="div">
                        {item?.l}
                    </Typography>
                </div>
            ))}
            <CardActions height="%100" disableSpacing>
                <IconButton size="large" onClick={() => {
                    history.push("/")
                }}>
                    <ArrowBackRounded />
                </IconButton>
            </CardActions>
        </Card>
    )
}
