import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';

function Header() {

    // sourcing in history
    const history = useHistory();


return(
        <header>
            <Box sx={{ padding: 0, }}>
                <AppBar position="stactic">
                    <Toolbar>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr:2 }}
                            >
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