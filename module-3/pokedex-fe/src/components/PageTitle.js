import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const styles = {
    container: {
        backgroundColor: "white",
        backgroundImage: "url('/images/container_bg.png')"

    }
}


export const PageTitle = () => {
    return (
        <Container maxWidth="lg" sx={styles.container}>
            <Box container maxWidth="md" sx={{ margin: "auto!important", paddingX: "2rem", paddingY: "1rem", backgroundColor: "white" }}>
                <Typography variant="h4" color="gray">Pokédex</Typography>
            </Box>
        </Container>
    )
}
