import React from "react";

import Grid from "@mui/material/Grid";
import MCard from "../components/MCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

//APIKEY TRONG ENV

function FavoritePage() {
  // let { favMovies, setfavMovies } = useFavMovies();
  let list = JSON.parse(localStorage.getItem("fav"));

  return (
    <>
      <Typography variant="h5" mb={2}>
        YOUR FAVORITES
      </Typography>
      <Divider />
      <Grid container direction="row" spacing={5} mt={2}>
        {list?.map((item) => (
          <Grid key={item.id} item xs={6} sm={4} md={3}>
            <MCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default FavoritePage;
