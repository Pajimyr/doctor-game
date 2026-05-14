import type { PatientState } from "@/Types/Pacient"

export const BLUE = "#0a2a4a"
export const BLUE_MID = "#1e3f6e"

export const STATE_COLOR: Record<PatientState, string> = {
  "mrtvý":         "#424242",
  "kritický":      "#b71c1c",
  "stabilní":      "#1b5e20",
  "zlepšující se": "#2e7d32",
}
