import { useEffect, useState } from "react";

const credentials: { [key: string]: string } = {
  olson: "prawojazdy",
  leszek: "MrBoss",
  jakubleszcz: "Frytki123",
  jacobbrim: "ChlebZMaslem",
  przemo: "Koza2025",
  gontarek: "NiePodrabiaj",
  smielak: "OSPFinalBoss",
  prejsuuu: "CzekoladaXD",
  mattkozlowski: "KozakWiadomo",
  technischools: "Kod1234XD",
};

const nicknames = Object.keys(credentials);

const TaskOne = () => {
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setNickname(nicknames[Math.floor(Math.random() * nicknames.length)]);
  }, []);

  const handleSubmit = () => {
    const correctPassword = credentials[nickname];
    if (password === correctPassword) {
      setFlag("Zalogowano pomyślnie");
      setError("");
    } else {
      setError("Nice try diddy");
      setFlag("");
    }
  };

  return (
    <div className="flex items-center justify-center my-48 bg-fixed bg-cover bg-center relative">
      <div
        className="p-8 rounded-3xl shadow-md w-96 text-white relative"
        style={{
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
          borderTop: "2px solid white",
          borderLeft: "1px solid white",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Etap 1: Logowanie
        </h2>
        <p className="mb-4 text-center">
          Twój nick: <span className="font-mono text-blue-300">{nickname}</span>
        </p>
        <p className="mb-4 text-sm text-gray-300">
          Znajdź email i hasło przypisane do nicku na podstawie dostarczonych
          danych.
        </p>
        <input
          type="text"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Zaloguj
        </button>

        {flag && (
          <p className="mt-4 text-green-500 font-bold text-center">{flag}</p>
        )}
        {error && (
          <p className="mt-4 text-red-500 font-bold text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default TaskOne;
