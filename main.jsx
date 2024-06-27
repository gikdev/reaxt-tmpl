import "./assets/main.css"
import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./components/app.component"
import { CommonProvider } from "./contexts/common.context"

const container = document.querySelector("#root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CommonProvider>
        <App />
      </CommonProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
