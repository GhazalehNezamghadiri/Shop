import React from 'react'
import { Box, Typography, Link, Stack, IconButton } from '@mui/material'
import { LinkedIn, Instagram, GitHub, Email } from '@mui/icons-material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 6,
        px: 4,
        mt: 8,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 4, sm: 8 }}
        justifyContent="space-between"
      >
      
        <Box>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Link href="/" underline="hover"  sx={{color:'text.primary'}}>Home</Link>
            <Link href="/about" underline="hover"  sx={{color:'text.primary'}}>About</Link>
            <Link href="/account" underline="hover"  sx={{color:'text.primary'}}>My Account</Link>
            <Link href="/contact" underline="hover"  sx={{color:'text.primary'}}>Contact Us</Link>
          </Stack>
        </Box>

       
        <Box>
          <Typography variant="h6" gutterBottom>
            Watches for Sale
          </Typography>
          <Stack spacing={1}>
            <Link href="/watches-sale" underline="hover"  sx={{color:'text.primary'}}>Watches for Sale</Link>
            <Link href="/mens-watches" underline="hover"  sx={{color:'text.primary'}}>Mens Watches</Link>
            <Link href="/women-watches" underline="hover"  sx={{color:'text.primary'}}>Women Watches</Link>
            <Link href="/unisex-watches" underline="hover"  sx={{color:'text.primary'}}>Unisex Watches</Link>
            <Link href="/watch-straps" underline="hover"  sx={{color:'text.primary'}}>Watch Straps</Link>
          </Stack>
        </Box>

       
        <Box>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Stack spacing={1}>
            <Link href="/support" underline="hover"  sx={{color:'text.primary'}}>Support</Link>
            <Link href="/delivery-returns" underline="hover"  sx={{color:'text.primary'}}>Delivery & Returns</Link>
            <Link href="/watch-repair-london" underline="hover"  sx={{color:'text.primary'}}>Watch Repair London</Link>
            <Link href="/account" underline="hover" sx={{color:'text.primary'}}>My Account</Link>
          </Stack>
        </Box>

       
        <Box>
          <Typography variant="h6" gutterBottom>
            About Me
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton  href="https://www.linkedin.com/in/ghazaleh-nezamghadiri-06b626302/" target="_blank" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton href="https://www.instagram.com/ghazale.ghadiri/?hl=en" target="_blank" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://github.com/GhazalehNezamghadiri" target="_blank" color="inherit">
              <GitHub />
            </IconButton>
            <IconButton href="mailto:ghazalehghadiri2@gmail.com" color="inherit">
              <Email />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer