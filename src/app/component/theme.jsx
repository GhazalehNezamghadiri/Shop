'use client'
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  }
})

export default function Theme({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
        {children}
    </MUIThemeProvider>
  )
}