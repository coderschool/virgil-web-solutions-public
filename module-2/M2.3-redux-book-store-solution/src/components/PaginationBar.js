import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationBar = ({ pageNum, setPageNum, totalPageNum }) => {
  const handleChange = (event, value) => {
    setPageNum(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination count={totalPageNum} page={pageNum} onChange={handleChange} showFirstButton showLastButton />
    </Stack>
  );
};

export default PaginationBar;
