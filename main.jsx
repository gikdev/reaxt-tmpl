import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/app.component"
import "./assets/main.css"

const container = document.querySelector("#root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
