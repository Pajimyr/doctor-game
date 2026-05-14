"use client"

import { useState } from "react"
import { Box, Button, Typography, Divider, IconButton } from "@mui/material"
import type { Pacient } from "@/Types/Pacient"
import { BLUE, BLUE_MID, STATE_COLOR } from "@/Constants/theme"
import StateChip from "@/Components/StateChip"

export default function PatientCard({ patient }: { patient: Pacient }) {
  const [expanded, setExpanded] = useState(false)

  if (!expanded) {
    return (
      <div style={{ position: "relative", display: "inline-flex" }}>
        <Button
          variant="contained"
          onClick={() => setExpanded(true)}
          sx={{
            bgcolor: STATE_COLOR[patient.currentState],
            paddingRight: "28px",
            "&:hover": { bgcolor: STATE_COLOR[patient.currentState], filter: "brightness(1.2)" },
          }}
        >
          {patient.firstName} {patient.surName}
        </Button>
        <div
          className="drag-handle"
          title="Přetáhnout"
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            cursor: "grab",
            color: "rgba(255,255,255,0.55)",
            fontSize: 13,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          ⠿
        </div>
      </div>
    )
  }

  return (
    <Box sx={{ width: 460, minWidth: 300, minHeight: 200, resize: "both", overflow: "hidden", bgcolor: BLUE, borderRadius: 2, boxShadow: 8, color: "#e8f0fe", display: "flex", flexDirection: "column" }}>
      <Box
        className="drag-handle"
        sx={{
          bgcolor: BLUE_MID,
          borderRadius: "8px 8px 0 0",
          px: 2,
          py: 1,
          cursor: "grab",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ color: "#90caf9", userSelect: "none", flex: 1 }}>
          ⠿ {patient.firstName} {patient.surName}
        </Typography>
        <StateChip state={patient.currentState} />
        <IconButton size="small" onClick={() => setExpanded(false)} sx={{ color: "#90caf9", ml: 1 }}>
          ✕
        </IconButton>
      </Box>

      <Box sx={{ p: 3, flex: 1, overflowY: "auto", userSelect: "none" }}>
        <Typography variant="body2" sx={{ color: "#90caf9" }}>
          Věk: {patient.age} let · Přijat: {patient.arrivedAt.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" })}
        </Typography>

        <Divider sx={{ my: 2, borderColor: BLUE_MID }} />

        <Typography variant="overline" sx={{ color: "#90caf9" }}>Fyzické parametry</Typography>
        <Box sx={{ mb: 2, display: "flex", gap: 3 }}>
          <Typography variant="body2" sx={{ color: "#e8f0fe" }}>Výška: <strong>{patient.height} cm</strong></Typography>
          <Typography variant="body2" sx={{ color: "#e8f0fe" }}>Váha: <strong>{patient.weight} kg</strong></Typography>
        </Box>

        <Divider sx={{ mb: 2, borderColor: BLUE_MID }} />

        <Typography variant="overline" sx={{ color: "#90caf9" }}>Okolnosti příjmu</Typography>
        <Typography variant="body2" sx={{ mb: 2, mt: 0.5, color: "#e8f0fe", lineHeight: 1.6 }}>
          {patient.Tragedy}
        </Typography>

        <Divider sx={{ mb: 2, borderColor: BLUE_MID }} />

        <Typography variant="overline" sx={{ color: "#90caf9" }}>Stav při příjmu</Typography>
        <Typography variant="body2" sx={{ mt: 0.5, color: "#e8f0fe", lineHeight: 1.6 }}>
          {patient.arrivedState}
        </Typography>

        {patient.timeOfDeath && (
          <>
            <Divider sx={{ mb: 2, mt: 2, borderColor: BLUE_MID }} />
            <Typography variant="overline" sx={{ color: "#ef9a9a" }}>Čas smrti</Typography>
            <Typography variant="body2" sx={{ mt: 0.5, color: "#ef9a9a" }}>
              {patient.timeOfDeath.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" })}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  )
}
