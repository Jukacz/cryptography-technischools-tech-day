import { useState, useEffect } from "react";
import NodeRSA from "node-rsa";

// Funkcja generująca parę kluczy RSA
const generateRSAKeys = () => {
  const key = new NodeRSA({ b: 512 });
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  return { publicKey, privateKey };
};

// Funkcja oczyszczająca klucz z nagłówków i stopki
const cleanKey = (key: string) => {
  return key
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, ""); // Usuwa również wszystkie białe znaki
};

const TaskThree = () => {
  const [publicKey, setPublicKey] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");
  const [userPrivateKey, setUserPrivateKey] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Zaszyfrowana lista wiadomości
  const encryptedMessages = [
    { text: "ولم يستخدم مترجماً", sender: "userA" },
    { text: "ولم يستخدم مترجماً", sender: "userB" },
    { text: "ولم يستخدم مترجماً", sender: "userA" },
    { text: "ولم يستخدم مترجماً", sender: "userA" },
    { text: "ولم يستخدم مترجماً", sender: "userB" },
  ];

  // Odszyfrowana lista wiadomości
  const decryptedMessages = [
    { text: "Wsp man", sender: "userA" },
    { text: "Yo wsg bro", sender: "userB" },
    { text: "Here's the password you wanted", sender: "userA" },
    { text: "TS2025", sender: "userA" },
    { text: "Thanks man :)", sender: "userB" },
  ];

  // Lista wiadomości wyświetlana użytkownikowi
  const [messages, setMessages] = useState(encryptedMessages);

  useEffect(() => {
    // Generowanie kluczy RSA
    const { publicKey, privateKey } = generateRSAKeys();
    setPublicKey(publicKey);
    setPrivateKey(cleanKey(privateKey));
  }, []);

  const handleCheckPrivateKey = () => {
    const cleanedUserKey = cleanKey(userPrivateKey);
    if (cleanedUserKey === privateKey) {
      setMessages(decryptedMessages); // Zmieniamy wiadomości na odszyfrowane
      setMessage("Good job!");
    } else {
      setMessage("Spróbuj ponownie");
    }
  };

  console.log(privateKey);

  return (
    <div className="flex items-start justify-center pt-12 relative">
      <div
        className="py-8 px-12 rounded-3xl shadow-md w-full max-w-md text-white"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          background:
            "linear-gradient(120deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
          borderTop: "2px solid white",
          borderLeft: "1px solid white",
          wordBreak: "break-word",
          whiteSpace: "normal",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Etap 3: Odszyfrowanie Chat-u
        </h2>

        <div className="mb-4 text-center">
          <p>Twój klucz publiczny:</p>
          <div className="font-mono text-blue-300 mt-4 break-all text-sm">
            {publicKey}
          </div>
        </div>

        {/* Chat */}
        <h3 className="text-xl font-bold mb-4 text-center">Odszyfruj Chat</h3>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "userA" ? "justify-start" : "justify-end"
              } mb-2`}
            >
              <div
                className={`p-3 rounded-lg ${
                  msg.sender === "userA"
                    ? "bg-gray-200 text-black"
                    : "bg-blue-500 text-white"
                }`}
                style={{
                  maxWidth: "70%",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 text-center">
          <p>Wpisz swój klucz prywatny:</p>
          <input
            type="text"
            value={userPrivateKey}
            onChange={(e) => setUserPrivateKey(e.target.value)}
            className="block w-full mb-4 p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
          />
        </div>

        <button
          onClick={handleCheckPrivateKey}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Sprawdź klucz
        </button>

        {message && (
          <p className="mt-4 text-center text-green-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default TaskThree;
