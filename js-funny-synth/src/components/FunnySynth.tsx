import { useEffect, useRef } from "react";
import { notes } from "../lib/models";
import { Synth } from "../lib/synth";

export const FunnySynth = () => {
    const synth = useRef<Synth | null>(null);

    useEffect(() => {
        synth.current = new Synth();

        const play = (e: KeyboardEvent) => {
            if (e.repeat) return;
            notes.forEach(({ key, keyboard }) => {
                if (e.key === keyboard) {
                    synth.current?.playNote(key);
                    console.log(key);
                }
            });
        };

        const stop = (e: KeyboardEvent) => {
            notes.forEach(({ key, keyboard }) => {
                if (e.key === keyboard) {
                    synth.current?.stopNote(key);
                }
            });
        };

        window.addEventListener("keydown", play);
        window.addEventListener("keyup", stop);

        return () => {
            synth.current?.clean();
            window.removeEventListener("keydown", play);
            window.removeEventListener("keyup", stop);
        };
    }, []);

    return (
        <div>
            <h1>JS Funny Synth</h1>
        </div>
    );
};
