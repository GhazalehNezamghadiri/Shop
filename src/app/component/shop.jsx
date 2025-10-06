"use client"
import useCartStore from "../store/cartStore"

import { create } from "zustand"
import { useEffect, useState } from "react"
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
} from "@mui/material"


const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const urls = [
      "https://dummyjson.com/products/category/mens-watches",
      "https://dummyjson.com/products/category/womens-watches"
    ]

    const allData = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    )

    const merged = allData.flatMap((item) => item.products)
    set({ products: merged })
  }
}))




export default function Products() {
  const { products, fetchProducts } = useProductStore()
  const [visible, setVisible] = useState(3)
  const addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 2 }}>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {products.slice(0, visible).map((item) => (
          <Card
            key={item.id}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              cursor: "pointer",
              height: 650,
              width: 350,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "0.3s",
              "&:hover .desc": {
                opacity: 1,
                maxHeight: 150,
              }
            }}
          >

            <CardMedia
              component="img"
              image={item.thumbnail}
              alt={item.title}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
              }} 
              />


            <Box sx={{ p: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mt: 1 }}
              >
                ${item.price}
              </Typography>


              <Typography
                className="desc"
                variant="body2"
                sx={{
                  opacity: 0,
                  maxHeight: 0,
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  mt: 1,
                }}
              >
                {item.description}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#001f3f",
                  "&:hover": {
                    backgroundColor: "#003366",
                  }
                }}
                fullWidth
                onClick={() => addToCart(item)}>
                Add to Cart
              </Button>
            </Box>
          </Card>
        ))}
      </Box>


      {visible < products.length && (

        <Box sx={{ textAlign: "center", mt: 4 }}>

          <Button
            variant="contained"
            sx={{

              backgroundColor: "#001f3f",
              color: "#fff",

              "&:hover": {
                backgroundColor: "#003366",
              }
            }}

            onClick={() => setVisible(products.length)}>
            More
          </Button>
        </Box>
      )}
    </Box>
  )
}