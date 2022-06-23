import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import PublicNavbar from "../components/PublicNavbar";
import AlertMsg from "../components/AlertMsg";



const PublicLayout = () => {
    return (
        <Stack minHeight="100vh" alignItems="center">
            <AlertMsg />
            <PublicNavbar />
            <Outlet />
        </Stack>
    );
}

export default PublicLayout;