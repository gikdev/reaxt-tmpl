import { createContext, useState } from "react"

export const CommonContext = createContext({
  name: "World",
  setName: () => null,
})

export function CommonProvider({ children }) {
  const [name, setName] = useState("World")
  const value = { name, setName }

  return <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
}
