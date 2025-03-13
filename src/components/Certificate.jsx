import React, { useState } from "react";
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            "& .overlay": { opacity: 1 },
            "& .certificate-image": { filter: "contrast(1.1) brightness(1) saturate(1.2)" },
          },
        }}
        onClick={() => setOpen(true)}
      >
        <img
          className="certificate-image"
          src={ImgSertif}
          alt="Certificate"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            filter: "contrast(1.05) brightness(0.9) saturate(1.1)",
            transition: "filter 0.3s ease",
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <FullscreenIcon sx={{ fontSize: 40, color: "white" }} />
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.6)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={ImgSertif}
            alt="Certificate Full View"
            style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain" }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;
