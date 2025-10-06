"use client"
import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Boxes() {
    const boxes = [
        {
            img: "/11.jpg",
            text: "Modern Watch Straps",
            span: "Browse our wide range of modular, British design watch straps and bracelets.",
            btn: "Browse Straps",
        },
        {
            img: "/12.jpg",
            text: "Beautiful Women's Watches",
            span: "Beauty begins the moment you decide to be yourself. Stylish watches for Women.",
            btn: "Women's Watches",
        },
        {
            img: "/13.jpg",
            text: "Contemporary Men's Watches",
            span: "Look at our wide range of minimalistic British designs, made in Switzerland.",
            btn: "Men's Watches",
        }
    ]

    useEffect(() => {
        const items = document.querySelectorAll(".fade-box");

        const view = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                })
            },
            { threshold: 0.2 }
        )

        items.forEach((el) => view.observe(el));
    }, [])

    return (
        <>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                    gap: 3,
                    maxWidth: "1200px",
                    mx: "auto",
                    p: 2,
                    mt: 12,
                    mb:12
                }}
            >
                {boxes.map((box, i) => (
                    <Box
                        key={i}
                        className="fade-box"
                        sx={{
                            height: 500,
                            backgroundImage: `url(${box.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: 2,
                            color: "#fff",
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                        }}
                    >
                        <Typography variant="body1" sx={{ mb: 2,fontWeight:'bold', fontSize:40 }}>
                            {box.text}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 4 }}>
                            {box.span}
                        </Typography>
                        <Button
                            
                            sx={{
                                fontSize:12,
                                backgroundColor: "#fff",
                                color: "#000",
                                width: "fit-content",
                                "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        >
                            {box.btn}
                        </Button>
                    </Box>
                ))}
            </Box>

            <style jsx global>{`
        .fade-box {
          opacity: 0;
          transform: translateY(80px);
          transition: opacity 0.8s ease, transform 1s ease;
        }
        .fade-box.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </>
    )
}