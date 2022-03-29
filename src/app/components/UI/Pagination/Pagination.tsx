import React from "react";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

interface PaginationComponentProps {
  itemsCount: number;
  currentPage: number;
  itemsPerPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const PaginationComponent = ({
  itemsCount,
  currentPage,
  itemsPerPage,
  handlePageChange,
}: PaginationComponentProps) => {
  const pageCount = Math.ceil(itemsCount / itemsPerPage);

  return (
    <>
      {pageCount > 0 && (
        <Stack sx={{ margin: "20px 0" }} spacing={2}>
          <Pagination
          id="pagination_component"
            page={currentPage}
            count={pageCount}
            siblingCount={1}
            boundaryCount={3}
            hideNextButton={true}
            hidePrevButton={true}
            showFirstButton={pageCount > 6}
            showLastButton={pageCount > 6}
            onChange={(event, page) => handlePageChange(event, page)}
            renderItem={(item) => {
              if (pageCount <= 6) {
                return <PaginationItem {...item} />;
              } else if (
                (item.page && item.type === "first") ||
                (item.page && item.type === "last")
              ) {
                return (
                  <PaginationItem
                    components={{
                      first: (el) => <div>First</div>,
                      last: (el) => <div>Last</div>,
                    }}
                    {...item}
                  />
                );
              } else if (
                (item.page &&
                  item.page <= currentPage + 1 &&
                  item.page >= currentPage - 1) ||
                (item.page && item.page > pageCount - 3)
              ) {
                return <PaginationItem {...item} />;
              } else if (
                (item.page &&
                  item.page <= currentPage + 2 &&
                  item.page >= currentPage - 1) ||
                (item.type === "end-ellipsis" && currentPage >= 6)
              ) {
                return <div>...</div>;
              }
            }}
          />
        </Stack>
      )}
    </>
  );
};
