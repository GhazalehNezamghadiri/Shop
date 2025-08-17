"use client"

import React from "react"
import { Button, Box } from "@mui/material"
import Link from "next/link"

export default function BackToShopButton() {
  return (
    <Box sx={{ mt: 15,ml:10 }}>
      <Link href="/" >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#001f3f",
            "&:hover": { backgroundColor: "#003366" },
            color: "#fff",
          }}
        >
          Back to Shop
        </Button>
      </Link>
    </Box>
  )
}