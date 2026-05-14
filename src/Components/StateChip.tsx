import { Chip } from "@mui/material"
import type { PatientState } from "@/Types/Pacient"
import { STATE_COLOR } from "@/Constants/theme"

export default function StateChip({ state }: { state: PatientState }) {
  return (
    <Chip
      label={state}
      size="small"
      sx={{ ml: "auto", bgcolor: STATE_COLOR[state], color: "#fff", fontWeight: 700 }}
    />
  )
}
