import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Box, Container, Grid, Stack, List, ListItem, ListItemText, Typography, Link } from '@mui/material';
import React from 'react';

const styles = {
    container: {
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
    },
    seal: {
        backgroundImage: 'url(/images/seal.png)',
        width: '50%',
        height: '4rem',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    smallText: {
        fontSize: '11px!important',
    },
    smallTextLeft: {
        fontSize: '14px',
    },
};

export const MainFooter = () => {
    return (
        <Container maxWidth="xl" sx={styles.container}>
            <Grid container maxWidth="md" sx={{ paddingY: '2rem' }} spacing={{ xs: 4, md: 4 }} columns={{ xs: 10, sm: 12, md: 12 }}>
                <Grid item xs={10} sm={12} md={4}>
                    <Stack>
                        <Typography variant="h6">The Pokémon Company</Typography>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography sx={styles.smallTextLeft} primary="What's new" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography sx={styles.smallTextLeft} primary="Pokémon Parents Guide" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography sx={styles.smallTextLeft} primary="Customer Service" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography sx={styles.smallTextLeft} primary="About Our Company" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography sx={styles.smallTextLeft} primary="Pokémon Careers" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography sx={styles.smallTextLeft} primary="Select a Country/Region" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography sx={styles.smallTextLeft} primary="Pokémon Press Guide" />
                                </ListItem>
                            </List>
                        </nav>
                    </Stack>
                </Grid>
                <Grid item xs={10} sm={12} md={4}>
                    <FacebookIcon />
                    <YouTubeIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <PinterestIcon />
                </Grid>
                <Grid item xs={10} sm={12} md={4}>
                    <Stack direction="row" spacing={1}>
                        <Link href="#" sx={styles.seal}></Link>
                        <nav aria-label="main mailbox folders">
                            <List sx={{ padding: 0 }}>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography sx={styles.smallText} primary="Terms of Use" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography primary="Privacy Notice" sx={styles.smallText} />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography primary="Cookie Page" sx={styles.smallText} />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography primary="Legal Info" sx={styles.smallText} />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText disableTypography primary="Security" sx={styles.smallText} />
                                </ListItem>
                            </List>
                        </nav>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};
