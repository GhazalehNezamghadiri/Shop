"use client"
import { useEffect } from "react"
import { Box, Typography, Button } from "@mui/material"

export default function WhoAreWe() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
  }, [])

  return (
    <>
      <Box
        className="fade-up"
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 5, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 8 },
          maxWidth: "1200px",
          mx: "auto",
          backgroundColor:'#f5f5f5'
        }}
      >
      
        <Box sx={{ flex: 1 }}>
          <img
            src="/19.webp" 
            alt="Watch"
            style={{ width: "100%", }}
          />
        </Box>

       
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Who Are We?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
            At Uniform Wares, we have many watches for sale, as well as watch straps.
            Our contemporary British watches are Swiss made and our minimalist
            watch designs mean you look classy and modern, whatever the occasion.
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 3, color: "text.secondary", fontStyle: "italic" }}
          >
            "Uniform Wares watches are defined by simplicity and minimal design, yet
            full of character and distinction. Designed in the heart of East London in
            the brand's Shoreditch studio and assembled in Switzerland, the watchmaker
            has made its indelible mark on the industry with highly considered, premium,
            contemporary timepieces." – FARFETCH
          </Typography>
          <Button
            variant="contained"
            sx={{
                backgroundColor:'black',
                color:'white',
                borderRadius:0,
                '&:hover':{
                    backgroundColor:'#f5f5f5',
                    color:'black'
                },
              
              px: 4,
              py: 1.5,
              textTransform: "none",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <style jsx global>{`
        .fade-up {
          opacity: 0;
          transform: translateY(80px);
          transition: opacity 0.9s ease,  1s ease;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}