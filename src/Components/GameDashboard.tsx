import { Box } from "@mui/material"
import BookButton from "@/Components/BookButton"
import { BLUE_MID } from "@/Constants/theme"

type Props = {
  onBookClick: () => void
}

export default function GameDashboard({ onBookClick }: Props) {
  return (
    <Box sx={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      bgcolor: BLUE_MID,
      px: 3,
      py: 1,
      display: "flex",
      alignItems: "center",
      gap: 2,
      zIndex: 100,
      boxShadow: "0 -2px 12px rgba(0,0,0,0.4)",
    }}>
      <BookButton onClick={onBookClick} />
    </Box>
  )
}
