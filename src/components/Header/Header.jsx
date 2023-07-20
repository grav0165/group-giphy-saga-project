import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { useState } from 'react';

function Header() {

    // sourcing in history
    const history = useHistory();
    const [ anchorState, setAnchorState ] = useState(null);
    const open = Boolean(anchorState);
    const handleClick = (event) => {
        setAnchorState(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorState(null);
    };


return(
        <header className='header-div'>
            <Box sx={{}}>
                <AppBar position="stactic">
                    <Toolbar>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr:2 }}
                            ><MenuList>
                            <MenuItem>
                            <Typography variant="body2" color="text.secondary">
                                Favorites
                            </Typography>
                            </MenuItem>
                        </MenuList>
                                <MenuIcon />
                                
                            </IconButton>
                            
                            
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
                                Giphy Search App
                            </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
)



}

export default Header;