import { BookProvider } from "@/Context/BookContext"
import type { ReactNode } from "react"

export default function GameLayout({ children }: { children: ReactNode }) {
  return <BookProvider>{children}</BookProvider>
}
