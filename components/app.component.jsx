import { Route, Routes } from "react-router"
import Base from "../layouts/base.layout"
import Home from "../routes/home.route"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
