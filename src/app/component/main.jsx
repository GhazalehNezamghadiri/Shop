"use client"
import Image from "next/image"
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"

export default function HeroHeader() {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down("md"))
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isSm ? "50vh" : isMd ? "70vh" : "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        padding: "0 20px",
        overflowX: "hidden",
      }}
    >

      <Image
        src="/Main-background.jpg"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
          
        }}
      />

    
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: isSm ? "24px" : isMd ? "28px" : "80px",
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Exclusive Watches Designed For You
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: isSm ? "14px" : isMd ? "16px" : "20px",
            opacity: 0.95,
          }}
        >
          Premium quality and clean design; perfect for everyday and formal style
        </Typography>
      </Box>
    </Box>
  )
}