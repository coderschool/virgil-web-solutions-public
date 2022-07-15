import React, { useState } from "react";
// import apiService from "../api/apiService";
// import { API_KEY } from "../api/config";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import RecommendIcon from "@mui/icons-material/Recommend";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
// import VideoPlayer from "./VideoPlayer";

function MDetailCard({ movieDetail, loading }) {
  let { movieId } = useParams();
  const [movieError, setmovieError] = useState();

  const addFavMovie = (title, poster, voteA, voteC, id) => {
    let list = JSON.parse(localStorage.getItem("fav"));
    if (list) {
      let itemId;
      for (let i = 0; i < list.length; i++) {
        itemId = list[i].movie.id;
      }
      if (itemId.includes(movieId)) {
        setmovieError("You had this item!");
      } else {
        list.push({
          id: id,
          original_title: title,
          poster_path: poster,
          vote_average: voteA,
          vote_count: voteC,
        });

        localStorage.setItem("fav", JSON.stringify(list));
        setmovieError("Added!");
      }
    } else {
      localStorage.setItem("fav", JSON.stringify([]));
      list = JSON.parse(localStorage.getItem("fav"));
      list.push({
        id: id,
        original_title: title,
        poster_path: poster,
        vote_average: voteA,
        vote_count: voteC,
      });
      localStorage.setItem("fav", JSON.stringify(list));
      setmovieError("Added!");
    }
  };
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      {loading ? (
        detailSkeleton
      ) : movieDetail ? (
        <Stack
          minWidth="80%"
          flexDirection={{ xs: "column", md: "row" }}
          sx={{ borderRadius: "10px" }}
        >
          <Stack
            my={3}
            minWidth="350px"
            sx={{
              borderRadius: "10px",
            }}
          >
            <Box>
              <img
                alt={`${movieDetail.original_title}`}
                height="500px"
                src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Stack>

          <Stack
            my={3}
            pl={{ xs: 0, md: 1 }}
            minHeight="100%"
            minWidth="400px"
            justifyContent="space-between"
          >
            <Stack
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row"
            >
              <Typography mb={1} variant="h6">
                {`${movieDetail.original_title}`}
              </Typography>
              <Stack flexDirection="column" alignItems="end">
                <IconButton
                  onClick={() =>
                    addFavMovie(
                      movieDetail.original_title,
                      movieDetail.poster_path,
                      movieDetail.vote_average,
                      movieDetail.vote_count,
                      movieId
                    )
                  }
                  size="large"
                  children={<StarIcon fontSize="large" />}
                  sx={{
                    backgroundColor: "rgba(225,0,0,0.9)",
                    marginRight: "30px",
                  }}
                />
                <Typography
                  sx={{
                    marginRight: "34px",
                    marginTop: "10px",
                  }}
                  color="error"
                >
                  {movieError}
                </Typography>
              </Stack>
            </Stack>
            <Stack my={{ xs: 2, md: 0 }}>
              <Typography variant="body">
                {`${movieDetail.overview}`}
              </Typography>
            </Stack>

            <Stack
              my={{ xs: 2, md: 1 }}
              flexDirection="row"
              alignItems="center"
            >
              <Typography mr={1} variant="caption">
                Genres
              </Typography>
              {movieDetail.genres.map((item) => (
                <Chip
                  key={`${item.id}`}
                  label={`${item.name}`}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Stack>
            <Stack
              my={{ xs: 2, md: 1 }}
              flexDirection="row"
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography mr={1} variant="caption">
                Companies
              </Typography>
              {movieDetail.production_companies
                .filter((item) => item.logo_path !== null)
                .map((item) => (
                  <Chip
                    key={`${item.id}`}
                    avatar={
                      <Avatar
                        alt="Natacha"
                        src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                      />
                    }
                    label={`${item.name}`}
                    size="small"
                    variant="filled"
                  />
                ))}
            </Stack>
            <Stack
              my={{ xs: 2, md: 1 }}
              flexDirection="row"
              alignItems="center"
            >
              <Typography mr={1} variant="caption">
                Released:
              </Typography>
              <Chip
                label={`${movieDetail.release_date}`}
                size="small"
                variant="outlined"
              />
            </Stack>

            <Stack flexDirection="row" justifyContent="flex-end" mt={1}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                mr={3}
              >
                <RecommendIcon className="recommend_icon" fontSize="small" />
                <Typography variant="subtitle2" ml={1}>
                  {`${movieDetail.vote_count}`}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <FavoriteIcon className="favorite_icon" fontSize="small" />
                <Typography variant="subtitle2" ml={1}>
                  {`${movieDetail.vote_average}`}
                </Typography>
              </Box>
              <Stack>
                {/* {movieDetail.videos.results?.map((item) => (
                  <VideoPlayer linkKey={item.key} />
                ))} */}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Typography variant="h4" m={5}>
          Movie not found!
        </Typography>
      )}

      <Divider />
    </>
  );
}

export default MDetailCard;
