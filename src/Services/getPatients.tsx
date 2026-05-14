import type { Pacient } from "@/Types/Pacient"
import HighlightedIdea from "@/Components/HighlightedIdea"

export const patients: Pacient[] = [
  {
    firstName: "Jan",
    surName: "Novák",
    age: 54,
    height: 181,
    weight: 94,
    arrivedAt: new Date(2026, 4, 14, 14, 23),
    timeOfDeath: null,
    currentState: "kritický",
    Tragedy: "Manželka zavolala záchranku poté, co si stěžoval na náhlou silnou bolest mezi lopatkami. Říkal že se 'něco trhlo'. Předtím bez potíží, šel jen ze schodů.",
    arrivedState: "při vědomí, bledý, TK 80/40 na levé ruce a 140/90 na pravé, bolest zad 9/10, mírná dušnost",
  },
  {
    firstName: "Marie",
    surName: "Horáková",
    age: 38,
    height: 167,
    weight: 61,
    arrivedAt: new Date(2026, 4, 14, 19, 47),
    timeOfDeath: null,
    currentState: "kritický",
    Tragedy: "Přátelé přivezli z restaurace, kde náhle dostala 'nejhorší bolest hlavy v životě'. Trvala sekundy než přišla naplno. Pak zvracela, teď je zmatená a nechce světlo.",
    arrivedState: <>
      při vědomí, orientovaná osobou ne místem,{" "}
      <HighlightedIdea id="meningealni-priznaky">meningeální příznaky</HighlightedIdea>,{" "}
      <HighlightedIdea id="gcs">GCS</HighlightedIdea> 13, zvracení, fotofóbie
    </>,
  },
  {
    firstName: "Tomáš",
    surName: "Procházka",
    age: 17,
    height: 183,
    weight: 71,
    arrivedAt: new Date(2026, 4, 14, 8, 15),
    timeOfDeath: null,
    currentState: "kritický",
    Tragedy: "Rodiče ho přivezli po třech dnech 'chřipky'. Hodně pil, hodně močil, dnes ráno ho nemohli probudit. Žádné předchozí diagnózy.",
    arrivedState: <>
      somnolentní,{" "}
      <HighlightedIdea id="gcs">GCS</HighlightedIdea> 11, hluboké pravidelné dýchání (
      <HighlightedIdea id="kussmaulovo-dychani">Kussmaulovo</HighlightedIdea>
      ), ovocný zápach z úst, TK 95/60, HR 118
    </>,
  },
]
