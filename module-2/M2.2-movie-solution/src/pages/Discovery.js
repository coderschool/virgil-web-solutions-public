import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MCard from "../components/MCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link, useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
//APIKEY TRONG ENV
function DiscoveryPage() {
  const [loading, setLoading] = useState();
  const [movieList, setMovieList] = useState([]);
  const { pageId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `discover/movie?api_key=${API_KEY}&page=${pageId}&language=en-US`
        );
        setMovieList(res.data.results);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [pageId]);
  const placeholder = [0, 1, 2, 3, 4];
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      <Typography variant="h5" mb={2}>
        DISCOVERY
      </Typography>
      <Divider />

      <Grid container direction="row" spacing={5} mt={2}>
        {loading
          ? placeholder.map((item) => (
              <Grid item xs={6} sm={4} md={3}>
                {detailSkeleton}
              </Grid>
            ))
          : movieList.map((item) => (
              <Grid item xs={6} sm={4} md={3}>
                <MCard item={item} />
              </Grid>
            ))}
      </Grid>
      <Pagination
        size="large"
        count={10}
        sx={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/discovery/${item.page}`}
            {...item}
          />
        )}
      />
    </>
  );
}

export default DiscoveryPage;
