import { Button } from "@mui/material"

export default function BookButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="outlined" onClick={onClick} sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
      Kniha
    </Button>
  )
}
