import * as React from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { resetError } from "redux/actions/userActionCreator/userActionCreator";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  borderRadius: "8px",
  bgcolor: "background.paper",
  border: "1px solid red",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

interface InfoModalProps {
  isOpen: boolean;
  text: string;
}

export const InfoModal = ({ isOpen, text }: InfoModalProps) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(resetError());

  return (
    <div>
      <Modal
        id="infoModal"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
