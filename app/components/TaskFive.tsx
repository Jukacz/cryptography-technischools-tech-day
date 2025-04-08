import { useState } from 'react';

const TaskFive = () => {
    const BinaryPuzzle = {
        binary: [
            "01101011", // k (107)
            "01110101", // u (117)
            "01110010", // r (114)
            "01111010", // z (122)
            "01111001", // y (121)
            "00100000", // spacja (32)
            "01101010", // j (106)
            "01100101", // e (101)
            "11000101", // ź (pierwszy bajt UTF-8: 0xC5)
            "10111010", // ź (drugi bajt UTF-8: 0xBA)
            "01100100", // d (100)
            "01111010", // z (122)
            "01101001", // i (105)
            "01100101", // e (101)
            "01100011"  // c (99)
        ],
        correctAnswer: "kurzy jeździec"
    };

    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleCheckAnswer = () => {
        if (userInput === '') {
            setFeedback('');
            setResult('');
            return;
        }
        if (userInput === BinaryPuzzle.correctAnswer) {
            setFeedback("Poprawnie!");
            setResult("Poprawnie! Przeszedłeś etap 5!");
        } else {
            setFeedback("Spróbuj jeszcze raz");
            setResult('');
        }
    };

    return (
        <div className="flex items-center justify-center mt-32 bg-fixed bg-cover bg-center relative">
            <div
                className="p-8 rounded-3xl shadow-md max-w-lg text-white relative"
                style={{
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
                    borderTop: "2px solid white",
                    borderLeft: "1px solid white",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                }}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Etap 5: Odszyfruj Binarny Kod
                </h2>

                <div className="space-y-6">
                    <div className="text-center">
                        <p className="mb-4 text-sm text-gray-300">
                            Oto binarne liczby do rozszyfrowania:
                        </p>
                        <div className="font-mono text-blue-300 break-all">
                            {BinaryPuzzle.binary.join(" ")}
                        </div>
                        <p className="mt-4 mb-4 text-sm text-gray-300">
                            Przekonwertuj liczby binarne na tekst, aby odkryć jawne zdanie. Wpisz je poniżej.
                        </p>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Wpisz odszyfrowane zdanie:
                        </label>
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Wpisz zdanie"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <button
                            onClick={handleCheckAnswer}
                            className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Sprawdź
                        </button>
                        <p
                            className={`mt-2 text-sm ${
                                feedback === "Poprawnie!" ? 'text-green-500' : feedback === '' ? '' : 'text-red-500'
                            }`}
                        >
                            {feedback}
                        </p>
                    </div>

                    {result && (
                        <p className="mt-4 text-green-500 font-bold text-center">{result}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskFive;