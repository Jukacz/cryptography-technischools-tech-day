import {useState} from "react";

const TaskFour = () => {
    // Obiekt z imionami i ich zaszyfrowanymi odpowiednikami z różnymi przesunięciami
    const SzyfrBozy = {
        Monika: {
            encrypted: "Zbavxn", // Przesunięcie o 13 (ROT13)
            shift: 13
        },
        Dorota: {
            encrypted: "Itwtyf", // Przesunięcie o 5
            shift: 5
        },
        Marek: {
            encrypted: "Pduhn", // Przesunięcie o 3
            shift: 3
        },
        Eustachy: {
            encrypted: "Lbzahjof", // Przesunięcie o 7
            shift: 7
        }
    };

    const [monikaInput, setMonikaInput] = useState('');
    const [dorotaInput, setDorotaInput] = useState('');
    const [marekInput, setMarekInput] = useState('');
    const [eustachyInput, setEustachyInput] = useState('');

    const checkInput = (input: string, correctValue: string) => {
        return input === correctValue ? "Poprawnie!" : "Spróbuj jeszcze raz";
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
                    Szyfr Cezara - Rozszyfruj Imiona
                </h2>

                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Monika (ROT{SzyfrBozy.Monika.shift}) →
                        </label>
                        <input
                            type="text"
                            value={monikaInput}
                            onChange={(e) => setMonikaInput(e.target.value)}
                            placeholder="Wpisz zaszyfrowane imię"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <p
                            className={`mt-2 text-sm ${
                                monikaInput === SzyfrBozy.Monika.encrypted
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }`}
                        >
                            {checkInput(monikaInput, SzyfrBozy.Monika.encrypted)}
                        </p>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Dorota (ROT{SzyfrBozy.Dorota.shift}) →
                        </label>
                        <input
                            type="text"
                            value={dorotaInput}
                            onChange={(e) => setDorotaInput(e.target.value)}
                            placeholder="Wpisz zaszyfrowane imię"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <p
                            className={`mt-2 text-sm ${
                                dorotaInput === SzyfrBozy.Dorota.encrypted
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }`}
                        >
                            {checkInput(dorotaInput, SzyfrBozy.Dorota.encrypted)}
                        </p>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Marek (ROT{SzyfrBozy.Marek.shift}) →
                        </label>
                        <input
                            type="text"
                            value={marekInput}
                            onChange={(e) => setMarekInput(e.target.value)}
                            placeholder="Wpisz zaszyfrowane imię"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <p
                            className={`mt-2 text-sm ${
                                marekInput === SzyfrBozy.Marek.encrypted
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }`}
                        >
                            {checkInput(marekInput, SzyfrBozy.Marek.encrypted)}
                        </p>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Eustachy (ROT{SzyfrBozy.Eustachy.shift}) →
                        </label>
                        <input
                            type="text"
                            value={eustachyInput}
                            onChange={(e) => setEustachyInput(e.target.value)}
                            placeholder="Wpisz zaszyfrowane imię"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <p
                            className={`mt-2 text-sm ${
                                eustachyInput === SzyfrBozy.Eustachy.encrypted
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }`}
                        >
                            {checkInput(eustachyInput, SzyfrBozy.Eustachy.encrypted)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskFour;