"use client"

import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import { IDEAS } from "@/utils/Ideas"
import type { Idea } from "@/utils/Ideas"

type BookContextType = {
  collected: Idea[]
  addIdea: (id: string) => void
}

const BookContext = createContext<BookContextType | null>(null)

export function BookProvider({ children }: { children: ReactNode }) {
  const [collected, setCollected] = useState<Idea[]>([])

  function addIdea(id: string) {
    const idea = IDEAS.find(i => i.id === id)
    if (!idea || collected.some(i => i.id === id)) return
    setCollected(prev => [...prev, idea])
  }

  return (
    <BookContext.Provider value={{ collected, addIdea }}>
      {children}
    </BookContext.Provider>
  )
}

export function useBook() {
  const ctx = useContext(BookContext)
  if (!ctx) throw new Error("useBook must be used inside BookProvider")
  return ctx
}
