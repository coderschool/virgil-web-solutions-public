import React from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: "1px",
}));

function SkillsPaper({ skills }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        boxShadow: 0,
        backgroundColor: (theme) => theme.palette.primary.light,
      }}
      component="ul"
    >
      {skills?.map((skill) => (
        <ListItem key={skill}>
          <Chip
            size="small"
            color="primary"
            label={skill}
            sx={{ paddingBottom: "2px", backgroundColor: "#df4747" }}
          />
        </ListItem>
      ))}
    </Paper>
  );
}

export default SkillsPaper;
