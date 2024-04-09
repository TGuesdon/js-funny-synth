export const keys = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

export type Key = (typeof keys)[number];

export const notes: { note: number; key: Key; keyboard: string }[] = [
    { note: 261.63, key: "C4", keyboard: "q" },
    { note: 293.66, key: "D4", keyboard: "s" },
    { note: 329.63, key: "E4", keyboard: "d" },
    { note: 349.23, key: "F4", keyboard: "f" },
    { note: 392.0, key: "G4", keyboard: "g" },
    { note: 440.0, key: "A4", keyboard: "h" },
    { note: 493.88, key: "B4", keyboard: "j" },
];
