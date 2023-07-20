import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const Favorites = () => {

    // Sourcing in dispatch
    const dispatch = useDispatch();

    const favoriteGifs = useSelector(store => store.favorites);

    return(
        <div className='favorite-list'>
            {
                favoriteGifs.map( (gif) => 
                <Card key={gif.id}>
                    <CardMedia 
                    sx={{ height: 200}}
                    image='https://media.giphy.com/media/Td2t0SIt6nr1PGP2CV/giphy.gif'
                    />
                </Card>


                )
            }
        </div>
    )











}

export default Favorites