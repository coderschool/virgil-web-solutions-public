import React, { useEffect } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import Grid from "@mui/material/Grid";
import MCard from "./MCard";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Skeleton from "@mui/material/Skeleton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const yearList = [
  { id: 1999, label: "1999" },
  { id: 1998, label: "1998" },
  { id: 1997, label: "1997" },
  { id: 1996, label: "1996" },
  { id: 2009, label: "2009" },
  { id: 2000, label: "2000" },
];
export default function Category() {
  const [openYear, setOpenYear] = React.useState(false);
  const [openGenres, setOpenGenres] = React.useState(true);
  const [loading, setLoading] = React.useState();
  const [genresList, setGenresList] = React.useState([]);
  const [movieList, setMovieList] = React.useState([]);
  const [genreId, setGenreId] = React.useState();
  const [yearId, setYearId] = React.useState(1999);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        setGenresList(res.data.genres);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      let url = `discover/movie?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
      try {
        setLoading(true);
        if (genreId) {
          setYearId(null);
          const res = await apiService.get(`${url}&with_genres=${genreId}`);
          setMovieList(res.data.results);
        }
        if (yearId) {
          setGenreId(null);
          const res = await apiService.get(`${url}&year=${yearId}`);
          setMovieList(res.data.results);
        }

        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [genreId, yearId]);

  const placeholder = [0, 1, 2, 3];
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      <Typography variant="h5" my={3}>
        CATEGORY
      </Typography>

      <Divider />
      <Stack flexDirection="row" width="100%" justifyContent="space-between">
        <Stack minWidth="150px" width={{ xs: "10%" }}>
          {/* Genres-------- */}
          <Box>
            <ListItemButton
              alignItems="flex-start"
              onClick={() => setOpenGenres(!openGenres)}
              sx={{
                pr: 2,
                pt: 2.5,
                pb: openGenres ? 0 : 2.5,

                "&:hover, &:focus": {
                  "& svg": { opacity: openGenres ? 1 : 0 },
                },
              }}
            >
              <ListItemText
                primary="Genres"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "2px",
                }}
                secondary="Action, Drama, Thriller, Anime, Romantic, ..."
                secondaryTypographyProps={{
                  noWrap: true,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: openGenres ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                }}
                sx={{ my: 0 }}
              />
              <KeyboardArrowDownIcon
                sx={{
                  mr: -1,
                  opacity: 0,
                  transform: openGenres ? "rotate(-180deg)" : "rotate(0)",
                  transition: "0.2s",
                }}
              />
            </ListItemButton>
            {openGenres &&
              genresList.map((item) => (
                <ListItemButton
                  onClick={() => setGenreId(item.id)}
                  key={item.id}
                  sx={{
                    py: 0,
                    minHeight: 40,
                    color: "rgba(255,255,255,.8)",
                    "&:focus": {
                      backgroundColor: "rgba(225,0,0,0.1)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontSize: 16,
                      fontWeight: "light",
                    }}
                  />
                </ListItemButton>
              ))}
            <Divider sx={{ marginTop: 3 }} />
          </Box>
          {/* Years-------- */}
          <Box>
            <ListItemButton
              alignItems="flex-start"
              onClick={() => setOpenYear(!openYear)}
              sx={{
                // pr: 2,
                pt: 2.5,
                pb: openYear ? 0 : 2.5,
                "&:hover, &:focus": {
                  "& svg": { opacity: openYear ? 1 : 0 },
                },
              }}
            >
              <ListItemText
                primary="Year"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "2px",
                }}
                secondary="Lastest and oldest edition."
                secondaryTypographyProps={{
                  noWrap: true,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: openYear ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                }}
                sx={{ my: 0 }}
              />
              <KeyboardArrowDownIcon
                sx={{
                  // mr: -1,
                  opacity: 0,
                  transform: openYear ? "rotate(-180deg)" : "rotate(0)",
                  transition: "0.2s",
                }}
              />
            </ListItemButton>
            {openYear &&
              yearList.map((item) => (
                <ListItemButton
                  onClick={() => setYearId(item.id)}
                  key={item.id}
                  sx={{ py: 0, minHeight: 40, color: "rgba(255,255,255,.8)" }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 16,
                      fontWeight: "light",
                    }}
                  />
                </ListItemButton>
              ))}
            <Divider sx={{ marginTop: 3 }} />
          </Box>
        </Stack>

        <Grid container direction="row" spacing={2} mt={2}>
          {loading
            ? placeholder.map((item) => (
                <Grid item xs={10} sm={6} md={4} lg={3}>
                  {detailSkeleton}
                </Grid>
              ))
            : movieList.map((item) => (
                <Grid item xs={10} sm={6} md={4} lg={3}>
                  <MCard key={item.id} item={item} />
                </Grid>
              ))}
        </Grid>
      </Stack>
    </>
  );
}
