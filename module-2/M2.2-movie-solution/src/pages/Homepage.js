import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import Grid from "@mui/material/Grid";
import TrendingCardGroup from "../components/TrendingCardGroup";
import Category from "../components/Category";

function HomePage() {
  const [loadingTrending, setLoadingTrending] = useState();
  const [trendingList, setTrendingList] = useState([]);
  const [cutInitial, setcutInitial] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingTrending(true);
        const res = await apiService.get(
          `/trending/all/day?api_key=${API_KEY}`
        );
        const result = res.data.results;
        setTrendingList(result);
        setcutInitial([...result].splice(16, 4));
        setLoadingTrending(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent={{ md: "center", xs: "flex-end" }}
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item direction="column" container>
          <TrendingCardGroup
            trendingList={trendingList}
            cutInitial={cutInitial}
            loadingTrending={loadingTrending}
          />
        </Grid>

        <Grid item direction="column" mt={5} container>
          <Category />
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
