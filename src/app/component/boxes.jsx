"use client"
import { Box, Typography } from "@mui/material"
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LockIcon from '@mui/icons-material/Lock';

export default function Fourboxes() {
  const features = [
    {
      icon: <PublicIcon sx={{ fontSize: 50, opacity: 0.7 }} />,
      title: "Worldwide Shipping",
      description: "We ship internationally via FedEx to the USA, Canada, UK & ROW."
    },
    {
      icon: <FlagIcon sx={{ fontSize: 50, opacity: 0.7 }} />,
      title: "British Design",
      description: "Our unique watch designs have been crafted in-house from London."
    },
    {
      icon: <HeadsetMicIcon sx={{ fontSize: 50, opacity: 0.7 }} />,
      title: "Customer Service",
      description: "Access our comprehensive service & repair centre based in London, UK."
    },
    {
      icon: <LockIcon sx={{ fontSize: 50, opacity: 0.7 }} />,
      title: "Secure Payments",
      description: "Our website & payment partners use secure SSL encrypted security."
    }
  ]

  return (
    <Box 
      sx={{ 
        py: 10, 
        px: { xs: 2, sm: 5, md: 10 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 4,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {features.map((feature, index) => (
        <Box 
          key={index} 
          sx={{ 
            textAlign: "center", 
            flex: "1 1 200px", 
            minWidth: { xs: "100%", sm: "45%", md: "auto" }, 
          }}
        >
          {feature.icon}
          <Typography 
            variant="h6" 
            fontWeight="bold" 
            sx={{ mt: 2, color: "text.secondary" }} 
          >
            {feature.title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ mt: 1, color: "text.secondary" }}
          >
            {feature.description}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}