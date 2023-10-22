import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from './Navbar';
import Hero from '../Assest/herobg.png'

function HeroSection() {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "white",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));
    return (
        <Box sx={{ backgroundColor: "#000000", backgroundImage: 'linear-gradient(147deg, #000000 0%, #434343 74%)', minHeight: "100vh" }}>
            <Container>
                <Navbar />
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#c0c0c0",
                                fontWeight: "500",
                                mt: 10,
                                mb: 4,
                            }}
                        >
                            Welcome to Cross Beats
                        </Typography>
                        <Title variant="h1">
                        "Groove to the Beat of the Coolest Earbug
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#c0c0c0", my: 4 }}
                        >
                            "Elevate your auditory experience with our cutting-edge Earbug – where style meets superior sound quality. Discover your perfect rhythm today!"
                        </Typography>
                        
                        <button style={{width:'150px'}} className='button-28'>
                            Buy Now
                        </button>
                        
                        
                    </Box>

                    <Box sx={{marginLeft:'2rem' }}>
                        <img
                            src={Hero}
                            alt="heroImg"
                            style={{ maxWidth: "100%", marginBottom: "2rem", }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default HeroSection