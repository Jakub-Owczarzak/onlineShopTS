import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PaginationComponentProps {
  count: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const PaginationComponent = ({
  count,
  handlePageChange,
}: PaginationComponentProps) => {
  const pageCount = Math.floor(count / 8);
  console.log(pageCount);
  return (
    <>
      {pageCount > 0 && (
        <Stack spacing={2}>
          <Pagination
            count={Math.floor(pageCount)}
            siblingCount={1}
            boundaryCount={2}
            hideNextButton={true}
            hidePrevButton={true}
            showFirstButton={true}
            showLastButton={true}
            onChange={(event, page) => handlePageChange(event, page)}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  first: (el) => <div>First</div>,
                  last: (el) => <div>Last</div>,
                }}
                {...item}
              />
            )}
          />
        </Stack>
      )}
    </>
  );
};
