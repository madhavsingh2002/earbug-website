import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpeakerIcon from '@mui/icons-material/Speaker';
import { Container } from "@mui/system";
import { styled } from "@mui/material";

function Navbar() {
  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#c0c0c0",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
  }));



  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
  }));


  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NavLink variant="body2" style={{ color: '#e4443f' }}><SpeakerIcon />  CrossBeats</NavLink>
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">Features</NavLink>
          <NavLink variant="body2">Services</NavLink>
          <NavLink variant="body2">Listed</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button style={{ width: '150px' }} className='button-28'>
          Login
        </button>
        <NavLink variant="body2">Sign Up</NavLink>
      </Box>
    </NavbarContainer>
  );
};


export default Navbar