"use client"

import {useEffect, useState} from "react";
import {goToNextStage} from "@/app/helper";
import {useRouter} from "next/navigation";

const TaskFour = () => {
    const router = useRouter();
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

    const [monikaInput, setMonikaInput] = useState({guessed: false, value: ""});
    const [dorotaInput, setDorotaInput] = useState({guessed: false, value: ""});
    const [marekInput, setMarekInput] = useState({guessed: false, value: ""});
    const [eustachyInput, setEustachyInput] = useState({guessed: false, value: ""});

    const [isDone, setIsDone] = useState(false);

    const checkInput = (input: string, correctValue: string) => {
        return input === correctValue;
    };

    useEffect(() => {
        if (monikaInput.guessed && dorotaInput.guessed && marekInput.guessed && eustachyInput.guessed) {
            setIsDone(true);
            setTimeout(() => {
                goToNextStage(4);
                router.push("/5");
            }, 3000);
        }

    }, [monikaInput, dorotaInput, marekInput, eustachyInput]);

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

                {isDone &&
                    <p className="text-green-500 mb-3">Brawo udało sie rozwiazac wsyzstkie imiona, czas przejsc do ostatniego
                        etapu!</p>}

                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Monika (ROT{SzyfrBozy.Monika.shift}) →
                        </label>
                        <input
                            type="text"
                            value={monikaInput.value}
                            onChange={(e) => setMonikaInput({
                                guessed: checkInput(e.target.value, SzyfrBozy.Monika.encrypted),
                                value: e.target.value
                            })}
                            placeholder="Wpisz zaszyfrowane imię"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <p
                            className={`mt-2 text-sm ${
                                monikaInput.value === SzyfrBozy.Monika.encrypted
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }`}
                        >
                            {checkInput(monikaInput.value, SzyfrBozy.Monika.encrypted) ? "Poprawnie!" : "Spróbuj jeszcze raz"}
                        </p>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Dorota (ROT{SzyfrBozy.Dorota.shift}) →
                        </label>
                        <input
                            type="text"
                            value={dorotaInput.value}
                            onChange={(e) =>
                                setDorotaInput({
                                    guessed: checkInput(e.target.value, SzyfrBozy.Dorota.encrypted),
                                    value: e.target.value
                                })
                            }
                            placeholder="Wpisz zaszyfrowane imię"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <p
                            className={`mt-2 text-sm ${
                                dorotaInput.value === SzyfrBozy.Dorota.encrypted
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }`}
                        >
                            {checkInput(dorotaInput.value, SzyfrBozy.Dorota.encrypted) ? "Poprawnie!" : "Spróbuj jeszcze raz"}
                        </p>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Marek (ROT{SzyfrBozy.Marek.shift}) →
                        </label>
                        <input
                            type="text"
                            value={marekInput.value}
                            onChange={(e) => (
                                setMarekInput({
                                    guessed: checkInput(e.target.value, SzyfrBozy.Marek.encrypted),
                                    value: e.target.value
                                })
                            )}
                            placeholder="Wpisz zaszyfrowane imię"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <p
                            className={`mt-2 text-sm ${
                                marekInput.value === SzyfrBozy.Marek.encrypted
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }`}
                        >
                            {checkInput(marekInput.value, SzyfrBozy.Marek.encrypted) ? "Poprawnie!" : "Spróbuj jeszcze raz"}
                        </p>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Eustachy (ROT{SzyfrBozy.Eustachy.shift}) →
                        </label>
                        <input
                            type="text"
                            value={eustachyInput.value}
                            onChange={(e) => (
                                setEustachyInput({
                                    guessed: checkInput(e.target.value, SzyfrBozy.Eustachy.encrypted),
                                    value: e.target.value
                                })
                            )}
                            placeholder="Wpisz zaszyfrowane imię"
                            className="block w-full p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
                        />
                        <p
                            className={`mt-2 text-sm ${
                                eustachyInput.value === SzyfrBozy.Eustachy.encrypted
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }`}
                        >
                            {checkInput(eustachyInput.value, SzyfrBozy.Eustachy.encrypted) ? "Poprawnie!" : "Spróbuj jeszcze raz"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskFour;