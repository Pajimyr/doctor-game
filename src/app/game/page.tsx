"use client";

import { useState } from "react";
import { patients } from "@/Services/getPatients";
import MovableGround from "@/Components/MovableGround";
import PatientCard from "@/Components/PatientCard";
import GameDashboard from "@/Components/GameDashboard";
import BookPanel from "@/Components/BookPanel";

export default function GamePage() {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <>
      <MovableGround>
        {patients.map((patient, i) => (
          <PatientCard key={i} patient={patient} />
        ))}
        {bookOpen && <BookPanel />}
      </MovableGround>

      <GameDashboard onBookClick={() => setBookOpen((o) => !o)} />
    </>
  );
}
