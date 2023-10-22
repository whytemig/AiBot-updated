import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";

const TheModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <button onClick={handleOpen} className="btn">
        Ask Me
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="chatgpt"
      >
        <Box className="container">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Ask Me Anything?
          </Typography>
          <form className="form">
            <TextField
              id="filled-basic"
              label="Question"
              variant="filled"
              sx={{ margin: "15px 0", width: "100%", border: "none" }}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TheModal;
