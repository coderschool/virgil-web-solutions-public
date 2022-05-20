import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MDetailCard from "../components/MDetailCard";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function MovieItemPage() {
  // let location = useLocation();
  let auth = useAuth();
  console.log(auth.user);
  let { movieId } = useParams();
  const [loading, setLoading] = useState();
  const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
        );
        console.log(res.data);
        setMovieDetail(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Typography variant="h5" mb={2}>
        MOVIE INFO
      </Typography>
      <Divider />

      <MDetailCard movieDetail={movieDetail} loading={loading} />
    </>
  );
}

export default MovieItemPage;
