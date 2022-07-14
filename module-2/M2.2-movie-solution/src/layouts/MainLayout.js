import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <MainHeader />
      </Grid>
      <Grid item xs={10} mt={5}>
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        <MainFooter />
      </Grid>
    </Grid>
  );
}

export default MainLayout;
