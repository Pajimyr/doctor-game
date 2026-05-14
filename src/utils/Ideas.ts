export type Idea = {
  id: string
  name: string
  desc: string
}

export const IDEAS: Idea[] = [
  {
    id: "disekce-aorty",
    name: "Disekce aorty",
    desc: "Trhlina ve vnitřní vrstvě aorty způsobující krvácení do stěny tepny. Projevuje se náhlou krutou bolestí mezi lopatkami nebo hrudníku. Asymetrický TK na rukou je klíčový příznak.",
  },
  {
    id: "subarachnoidalni-krvaceni",
    name: "Subarachnoidální krvácení",
    desc: "Krvácení do prostoru mezi mozkem a jeho obaly. Typický příznak je náhlá 'thunderclap' bolest hlavy — nejhorší bolest v životě pacienta. Může být zaměněna za migrénu.",
  },
  {
    id: "dka",
    name: "Diabetická ketoacidóza (DKA)",
    desc: "Život ohrožující komplikace diabetu. Příznaky: Kussmaulovo dýchání, ovocný zápach z úst, dehydratace, porucha vědomí. Často první projev diabetu 1. typu.",
  },
  {
    id: "kussmaulovo-dychani",
    name: "Kussmaulovo dýchání",
    desc: "Hluboké, pravidelné a zrychlené dýchání jako kompenzace metabolické acidózy. Typické pro diabetickou ketoacidózu.",
  },
  {
    id: "gcs",
    name: "Glasgow Coma Scale (GCS)",
    desc: "Skóre hodnotící úroveň vědomí pacienta (3–15). Hodnotí otevření očí, verbální a motorickou odpověď. GCS ≤ 8 = těžká porucha vědomí.",
  },
  {
    id: "meningealni-priznaky",
    name: "Meningeální příznaky",
    desc: "Příznaky dráždění mozkových obalů — ztuhlost šíje, fotofóbie, fonofóbie, Kernigovo a Brudzinského znamení. Vyskytují se u meningitidy a subarachnoidálního krvácení.",
  },
]
