"use client"
import useCartStore from './cartStore'
import { Box, Typography, Button, IconButton, Paper } from '@mui/material'
import Header from '../component/header'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import BackToShopButton from '../component/btn'
import Footer from '../component/footer'

export default function StorePage() {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCartStore()

  return (
    <>
      <Header />
      <BackToShopButton />

      <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 2, md: 4 }, mt: 10 }}>
        {cartItems.length === 0 ? (
          <Typography variant="h5" textAlign="center" color="text.secondary">
            Your cart is empty
          </Typography>
        ) : (
          cartItems.map((item) => (
            <Paper
              key={item.id}
              elevation={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                mb: 3,
                p: 2,
                borderRadius: 3,
                transition: '0.3s',
                '&:hover': { boxShadow: 6, transform: 'translateY(-2px)' }
              }}
            >
            
              <Box
                component="img"
                src={item.thumbnail}
                alt={item.title}
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  objectFit: 'cover',
                  mr: 2
                }}
              />

            
              <Box sx={{ flex: 1, minWidth: 180 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price} × {item.quantity}
                </Typography>
              </Box>

             
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
                <IconButton 
                  size="small" 
                  sx={{ border: '1px solid #ddd', backgroundColor: '#f9f9f9' }} 
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography fontWeight="bold">{item.quantity}</Typography>
                <IconButton 
                  size="small" 
                  sx={{ border: '1px solid #ddd', backgroundColor: '#f9f9f9' }} 
                  onClick={() => increaseQuantity(item.id)}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

            
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: 3, px: 3, fontSize: 13 }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Paper>
          ))
        )}

        {cartItems.length > 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              sx={{ 
                px: 5,
                py: 1.5,
                borderRadius: 3,
                backgroundColor: '#444',
                '&:hover': { backgroundColor: '#222' } 
              }}
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </Box>
        )}
      </Box>

      <Footer/>
    </>
  )
}