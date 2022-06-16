import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import GamepadIcon from '@mui/icons-material/Gamepad';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import PetsIcon from '@mui/icons-material/Pets';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { ListItemIcon, ListItemText } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const pages = [
    ['Home', PetsIcon, grey[500], '/'],
    ['Pokédex', ArrowDropDownCircleIcon, 'custom.red', '/'],
    ['Video Game & App', GamepadIcon, 'custom.orange'],
    ['Trading Card Game', AutoAwesomeMotionIcon, 'custom.yellow'],
    ['Pokémon TV', LiveTvIcon, 'custom.green'],
    ['Play! Pokémon Events', EmojiEventsIcon, 'custom.lightBlue'],
    ['News', NewspaperIcon, 'custom.blue'],
];
const styles = {
    container: {
        padding: '0!important',
    },
    menuItem: {
        width: '100vw',
        position: 'relative',
        height: '4rem',
    },
    iconMd: {
        textAlign: 'center',
        py: 1,
        color: 'gray',
        borderRadius: 0,
        border: 'white',
        display: 'flex',
        width: `${100 / 7}%`,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        transitionDuration: '0.3s',
    },
};

export const MainHeader = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'white',
                    backgroundColor: { xs: '#000', md: '#fff' },
                    borderRadius: 0,
                }}
            >
                <Container maxWidth="md" sx={styles.container}>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, backgroundColor: { xs: '#000', md: '#fff' } }}>
                            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    backgroundColor: '#000',
                                    padding: { xs: 0 },
                                }}
                            >
                                {pages.map((page) => {
                                    const IconComponent = page[1];
                                    return (
                                        <MenuItem
                                            sx={{
                                                ...styles.menuItem,
                                                ':before': {
                                                    content: "''",
                                                    position: 'absolute',
                                                    width: '0.5rem',
                                                    height: '100%',
                                                    left: 0,
                                                    top: 0,
                                                    backgroundColor: page[2],
                                                },
                                            }}
                                            key={page[0]}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <ListItemIcon>
                                                <IconComponent />
                                            </ListItemIcon>
                                            <ListItemText>{page[0]}</ListItemText>
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => {
                                const IconComponent = page[1];
                                return (
                                    <Button
                                        key={page}
                                        component={Link}
                                        to={page[3] || '#'}
                                        onClick={handleCloseNavMenu}
                                        href="#"
                                        sx={{
                                            ...styles.iconMd,
                                            backgroundColor: page[0] === 'Pokédex' ? page[2] : null,
                                            color: page[0] === 'Pokédex' ? 'white !important' : grey[500],
                                            ':hover': {
                                                backgroundColor: page[2],
                                                color: 'white',
                                                transitionDuration: '0.3s',
                                            },
                                            '& :after': {
                                                content: "''",
                                                position: 'absolute',
                                                bottom: -5,
                                                left: 0,
                                                width: '100%',
                                                height: 5,
                                                backgroundColor: page[2],
                                                borderTop: page[0] === 'Pokédex' ? '1px solid' : null,
                                                borderTopColor: page[0] === 'Pokédex' ? page[2] : null,
                                                borderRadius: page[0] === 'Home' ? '0 0 0 0.5rem' : page[0] === 'News' ? '0 0 0.5rem 0' : null,
                                            },
                                        }}
                                    >
                                        <IconComponent sx={{ fontSize: 20 }} />
                                        <Typography sx={{ fontSize: 11.5 }}>{page[0]}</Typography>
                                    </Button>
                                );
                            })}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ height: '5rem' }}></Box>
        </div>
    );
};
