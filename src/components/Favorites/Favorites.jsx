import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux'

const Favorites = () => {

    // Sourcing in dispatch
    const dispatch = useDispatch();

    // Sourcing in the dropdown on card array
    const dropDown = ['funny', 'cohort', 'cartoon', 'nsfw', 'meme']

    const favoriteGifs = useSelector(store => store.favorites);

    // using a state to hold the tag selected
    const [ tagInput, setTagInput ] = useState();

    // Function to handle selecting different options from the dropdown
    const handleTagInput = (event) => {
        setTagInput(event.target.value);
    }

    // Function to submit a PUT request to the favorites reducer
    const handleTagSubmit = () => {
        dispatch({
            type: 'ADD_TAG',
            payload: tagInput.id
        })
    }

    return(
        <div className='favorite-list'>
                <Card sx={{ width: '50%', height: '90%', minWidth: 350, minHeight: 400}}>
                    <CardMedia 
                    sx={{ height: 400 }}
                    image='https://media.giphy.com/media/Td2t0SIt6nr1PGP2CV/giphy.gif'
                    />
                    <CardContent>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Tags"
                            defaultValue=''
                            onChange={handleTagInput}
                            sx={{ width: 175 }}
                        >
                            {dropDown.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                            </TextField>
                        <Button size='large' onClick={handleTagSubmit}>Add Tag</Button>
                    </CardContent>
                </Card>
        </div>
    )











}

export default Favorites