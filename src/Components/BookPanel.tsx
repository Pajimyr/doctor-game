"use client";

import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { BLUE, BLUE_MID } from "@/Constants/theme";
import { useBook } from "@/Context/BookContext";

export default function BookPanel() {
  const [tab, setTab] = useState(0);
  const { collected } = useBook();

  return (
    <Box
      sx={{
        width: 600,
        minWidth: 300,
        minHeight: 200,
        resize: "both",
        overflow: "hidden",
        bgcolor: BLUE,
        borderRadius: 2,
        boxShadow: 8,
        color: "#e8f0fe",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        <Typography variant="body2" sx={{ color: "#90caf9", userSelect: "none" }}>
          ⠿ Kniha
        </Typography>
      </Box>

      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{
          borderBottom: `1px solid ${BLUE_MID}`,
          px: 1,
          "& .MuiTabs-indicator": { bgcolor: "#90caf9" },
        }}
      >
        <Tab label="Pojmy" sx={{ color: "#90caf9", "&.Mui-selected": { color: "#fff" } }} />
      </Tabs>

      <Box sx={{ p: 3, flex: 1, overflowY: "auto", userSelect: "none" }}>
        {tab === 0 && (
          collected.length === 0
            ? <Typography variant="body2" sx={{ color: "#90caf9" }}>Zatím žádné pojmy — klikni na zvýrazněný text.</Typography>
            : collected.map(idea => (
              <Box key={idea.id} sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ color: "#fff", fontWeight: 700 }}>{idea.name}</Typography>
                <Typography variant="body2" sx={{ color: "#b0bec5", lineHeight: 1.6 }}>{idea.desc}</Typography>
              </Box>
            ))
        )}
      </Box>
    </Box>
  );
}
