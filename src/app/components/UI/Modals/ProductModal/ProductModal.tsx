import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Product } from "models/products.interface";
import { ProductItem } from "app/components/products/ProductItem/ProductItem";
import { CloseButton } from "../../Buttons/CloseButton";

interface ProducModalProps<T> {
  handleModalClose: () => void;
  dataToDisplay: T | null;
  isModalOpen: boolean;
}

const containerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "327px", md: "600px" },
  height: { xs: "570px", md: "530px" },
  p: 4,
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
};

export const ProductModal = ({
  isModalOpen,
  dataToDisplay,
  handleModalClose,
}: ProducModalProps<Product>) => {
  return (
    <div>
      <Modal
        data-testid="product_modal"
        open={isModalOpen}
        onClose={handleModalClose}
      >
        <Box sx={containerStyle}>
          <Box
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              zIndex: "50",
              top: "25px",
              right: "25px",
            }}
          >
            <CloseButton />
          </Box>
          <ProductItem isModalElement={true} item={dataToDisplay} />
        </Box>
      </Modal>
    </div>
  );
};
