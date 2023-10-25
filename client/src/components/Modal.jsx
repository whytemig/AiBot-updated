import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import ResponseModal from "./ResponseModal";

const TheModal = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    };
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3500/chat", options);
      const data = await res.json();
      setLoading(false);
      setResponse(data);
      setMessage("");
      setOpen(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCloseModal = () => {
    setResponse(null);
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
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              id="filled-basic"
              label="Question"
              variant="filled"
              sx={{ margin: "15px 0", width: "100%", border: "none" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn">
              {loading ? <CircularProgress /> : "Submit"}
            </button>
          </form>
        </Box>
      </Modal>
      {response && (
        <ResponseModal response={response} closeModal={handleCloseModal} />
      )}
    </div>
  );
};

export default TheModal;
