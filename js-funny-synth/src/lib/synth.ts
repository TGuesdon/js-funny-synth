import { Key, notes } from "./models";

export class Synth {
    private context: AudioContext;
    private oscillators: Map<Key, OscillatorNode> = new Map();
    private gain: GainNode;

    constructor() {
        this.context = new AudioContext();
        this.gain = this.context.createGain();
        this.gain.connect(this.context.destination);

        notes.forEach((note) => {
            const oscillator = this.context.createOscillator();
            oscillator.type = "sine";
            oscillator.frequency.value = note.note;
            oscillator.start();
            this.oscillators.set(note.key, oscillator);
        });
    }

    playNote = (key: Key) => {
        this.oscillators.get(key)?.connect(this.gain);
    };

    stopNote = (key: Key) => {
        this.oscillators.get(key)?.disconnect(this.gain);
    };

    clean = () => {
        this.context.close();
    };
}
