"use client"
import * as React from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import { createRoot } from "react-dom/client"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function showPopup(message, severity = "info") {
  const div = document.createElement("div")
  document.body.appendChild(div)

  const root = createRoot(div)
  const handleClose = () => {
    root.unmount()
    div.remove()
  }

  root.render(
    <Snackbar
      open={true}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  )
}