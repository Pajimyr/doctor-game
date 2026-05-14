export type PatientState = "mrtvý" | "kritický" | "stabilní" | "zlepšující se"

import type { ReactNode } from "react"

export type Pacient = {
  firstName: string;
  surName: string;
  age: number;

  height: number; // cm
  weight: number; // kg

  arrivedAt: Date;
  timeOfDeath: Date | null;

  arrivedState: ReactNode;
  currentState: PatientState;

  Tragedy: ReactNode;
};
