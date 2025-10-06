"use client"
import { Box, Typography, Button } from "@mui/material"

export default function ParallaxSection() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url(/Main-background.jpg)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.4)",
          p: { xs: 4, sm: 8, md: 12 },
          width: '100%',
          height: '100%',
          borderRadius: 2,
         
        }}
      >
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '3rem' } 
          }}
        >
          M37 PreciDrive Three-hand Watch
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2,
            px:5,
            fontSize: { xs: '1rem', sm: '1.2rem'  } 
          }}
        >
         A Swiss made, British brand PreciDrive, high quality, three hand watch in our signature lug-less M-Line case design in 37mm diameter. Paired with an Italian nitrile rubber strap.
        </Typography>
        <Button 
          variant="contained" 
          sx={{
            backgroundColor:'#fff', 
            color:'#000', 
            borderRadius:0, 
            '&:hover': { backgroundColor:'#e0e0e0' },
            fontSize: '0.9rem', 
            px: { xs: 2, sm: 4 }, 
            py: { xs: 1, sm: 2 }  
          }} 
        >
          Look Closer
        </Button>
      </Box>
    </Box>
  )
}