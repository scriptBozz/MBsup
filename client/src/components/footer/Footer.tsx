import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";

import FooterContent from "./FooterContent";
import FooterIcons from "./FooterIcons";

export default function Footer() {
  return (
    <Box className="footer">
      <div className="footercontac">
        <div>
          <Typography>
            <h2>MB SUPERIOR</h2>
          </Typography>
        </div>
        <div className="footercontact">
          <Typography>
            <p>
              <LocalPhoneIcon /> <span>+312345678</span>
            </p>
            <p>
              <MailOutlineIcon /> <span>Email@mail.com</span>
            </p>
            <p>
              <BusinessIcon />
              <span>23 suisstraat</span>
            </p>
            <p>KVK</p>
          </Typography>
        </div>
        <div className="footersub">
          <TextField
            id="standard-basic"
            label="email"
            variant="standard"
            helperText="Enter your email to recieve our offers"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
      <hr></hr>

      <FooterIcons />
      <FooterContent />
    </Box>
  );
}
