import { useState } from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FormattedMessage } from "react-intl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import { SocialSharing } from "../SocialSharing/SocialSharing";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
};

export const ModalConfirm = ({ open, url, title, onClose }) => {
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event) => {
    setOpenAlert(false);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        borderRadius: "8px",
        border: "none",
      }}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Movies list - "{title}""
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="List URL"
            inputProps={{ "aria-label": "list URL" }}
            value={url}
          />
          <IconButton
            href={url}
            target="_blank"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <VisibilityIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="copy to clipboard"
            >
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>
        {openAlert ? (
          <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            sx={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
            //anchorOrigin={{ "top", "center" }}
          >
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <FormattedMessage id="copied" />
            </Alert>
          </Snackbar>
        ) : null}
        <SocialSharing url={url} title={title} />
      </Box>
    </Modal>
  );
};

ModalConfirm.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
};
