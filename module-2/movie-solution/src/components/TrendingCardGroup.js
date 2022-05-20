import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MCard from "./MCard";
import Typography from "@mui/material/Typography";
import PaginationItem from "@mui/material/PaginationItem";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
function TrendingCardGroup({ trendingList, cutInitial, loadingTrending }) {
  const [cutList, setCutList] = useState();
  const [copiedList, setcopiedList] = useState([]);

  function handleList() {
    let y;
    if (copiedList.length === 0) {
      setcopiedList([...trendingList]);
      y = [...trendingList].slice(0, 4);
      copiedList.splice(0, 4);
    } else if (copiedList.length === 4) {
      setcopiedList([...trendingList]);
      y = copiedList.splice(0, 4);
    } else {
      y = copiedList.splice(4, 4);
    }
    return y;
  }
  const placeholder = [0, 1, 2, 3];
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" my={3}>
          TRENDING
        </Typography>

        <PaginationItem onClick={() => setCutList(handleList())} type="next" />
      </Stack>
      <Divider />
      <Grid container direction="row" spacing={5} mt={2}>
        {loadingTrending
          ? placeholder.map((item) => (
              <Grid key={item.id} item xs={6} sm={4} md={3}>
                {detailSkeleton}
              </Grid>
            ))
          : cutList
          ? cutList.map((item) => (
              <Grid key={item.id} item xs={6} sm={4} md={3}>
                <MCard item={item} />
              </Grid>
            ))
          : cutInitial?.map((item) => (
              <Grid key={item.id} item xs={6} sm={4} md={3}>
                <MCard item={item} />
              </Grid>
            ))}
      </Grid>
    </>
  );
}

export default TrendingCardGroup;
