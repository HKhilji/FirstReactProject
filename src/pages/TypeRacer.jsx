import './TypeRacer.css'
import { useEffect, useState, useRef } from 'react';

const sampleText = `My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead- murdered by my brother-in-law, Hank Schrader.`

function TypeRacer({ mode }) {

    const [input, setInput] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        if (input.length === 1 && !startTime) {
            setStartTime(Date.now());
        }

        if (input === sampleText) {
            const endTime = Date.now();
            const time = (endTime - startTime) / 60000;
            const words = sampleText.split(" ").length;
            setWpm(Math.round(words/time));
        }
    }, [input]);

    const getClass = (char, index) => {
        if (!input[index]) return "";
        if (input[index] === char) return "correct";
        return "incorrect";
    };

    return(
        <div className={`type-racer ${mode}`}>
            <h1>TypeRacer</h1>
            <p className = 'text'>
                {sampleText.split("").map((char, idx) => (
                    <span key={idx} className={getClass(char, idx)}>
                        {char}
                    </span>
                ))}
            </p>

            <textarea ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder='Start Typing here...'/>
            
            <div className='stats'>
                {input === sampleText && <p>🏁 Finished! Your WPM: {wpm}</p>}
            </div>
        
        </div>
    );
}

export default TypeRacer;