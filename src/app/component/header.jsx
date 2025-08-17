"use client"
import React, { useState } from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import MenuIcon from "@mui/icons-material/Menu"
import useCartStore from "../store/cartStore"  

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { cartItems } = useCartStore() 

  const menuItems = [
    "Blog",
    "Watch Straps",
    "Unisex Watches",
    "Womens Watches",
    "Mens Watches",
  ]

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#000" }}
          >
            Uniform Wares
          </Typography>

        
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button key={item} sx={{ color: "#000" }}>
                {item}
              </Button>
            ))}

            {/* Cart with badge */}
            <Link href="/store" passHref>
              <IconButton component="a" color="inherit" aria-label="shopping cart">
                <Badge
                  badgeContent={cartItems.length}
                  color="error"
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.7rem",
                      height: "18px",
                      minWidth: "18px",
                    },
                  }}
                >
                  <ShoppingCartIcon sx={{ color: "#000" }} />
                </Badge>
              </IconButton>
            </Link>
          </Box>

          {/* Mobile menu */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}
          >
            <Link href="/store" passHref>
              <IconButton component="a" color="inherit" aria-label="shopping cart">
                <Badge
                  badgeContent={cartItems.length}
                  color="error"
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.7rem",
                      height: "18px",
                      minWidth: "18px",
                    },
                  }}
                >
                  <ShoppingCartIcon sx={{ color: "#000" }} />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              aria-label="menu"
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { height: "auto", maxHeight: "90vh", mt: 8 } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}