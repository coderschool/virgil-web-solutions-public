import { Outlet } from "react-router-dom";
import { Box, Button, Fab, Stack } from "@mui/material";
import { MainFooter } from "./MainFooter";
import { MainHeader } from "./MainHeader";
import PokemonModal from "../components/PokemonModal";
import { useState } from "react";
import EggIcon from '@mui/icons-material/Egg';

function MainLayout() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <Stack sx={{ minHeight: "100vh" }}>
            <MainHeader />
            <Outlet />
            <Box sx={{ flexGrow: 1 }} />
            <MainFooter />
            <PokemonModal open={open} setOpen={setOpen} />
            <Box sx={{
                position: "fixed",
                bottom: "3rem",
                right: "1rem",
                color: "white",
                borderRadius: "50%",
                '& > :not(style)': { m: 1 }
            }}
                onClick={handleOpen}
            >
                <Fab color="primary" aria-label="add"  >
                    <EggIcon className="create-btn" />
                </Fab>
            </Box>
        </Stack>
    );
}

export default MainLayout;