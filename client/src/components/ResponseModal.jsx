import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const ResponseModal = ({ response, closeModal }) => {
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        onClose={closeModal}
        open={response ? true : false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="chatgpt"
        sx={{ overflow: "scroll" }}
      >
        <Box className="container2">
          <Button
            onClick={closeModal}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            ❌
          </Button>

          <Typography
            id="modal-modal-description"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            {response}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ResponseModal;
