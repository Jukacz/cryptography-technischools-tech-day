import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const TaskTwo = () => {
  const [hash, setHash] = useState<string>("");
  const [encodingType, setEncodingType] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [flag, setFlag] = useState<string>("");

  // List of possible encoding types
  const encodingTypes = ["MD5", "SHA-256", "SHA-512"];

  // Function to generate a random hash and set the state
  const generateHash = () => {
    const selectedEncoding =
      encodingTypes[Math.floor(Math.random() * encodingTypes.length)];
    const sampleText = "HelloWorld123"; // Sample text to hash

    let generatedHash: string;

    // Generate hash based on selected encoding type
    switch (selectedEncoding) {
      case "MD5":
        generatedHash = CryptoJS.MD5(sampleText).toString();
        break;
      case "SHA-256":
        generatedHash = CryptoJS.SHA256(sampleText).toString();
        break;
      case "SHA-512":
        generatedHash = CryptoJS.SHA512(sampleText).toString();
        break;
      default:
        generatedHash = "";
    }

    setHash(generatedHash);
    setEncodingType(selectedEncoding);
    setError("");
    setFlag("");
  };

  // Handle form submission
  const handleSubmit = () => {
    if (userInput.toUpperCase() === encodingType.toUpperCase()) {
      setFlag("Correct! You've guessed the encoding.");
      setError("");
    } else {
      setError("Incorrect! Try again.");
      setFlag("");
    }

    // Generate a new hash and encoding after each attempt
    setTimeout(generateHash, 2000);
  };

  // Generate the first hash on component mount
  useEffect(() => {
    generateHash();
  }, []);

  return (
    <div className="flex items-center justify-center my-48 bg-fixed bg-cover bg-center relative">
      <div
        className="p-8 rounded-3xl shadow-md max-w-full text-white relative"
        style={{
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
          borderTop: "2px solid white",
          borderLeft: "1px solid white",
          wordBreak: "break-word", // To prevent long hashes from overflowing
          whiteSpace: "normal", // Ensure text can break and wrap normally
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Etap 2: Rozpoznaj Hash
        </h2>
        <div className="mb-4 text-center">
          <p>Oto wygenerowany hash:</p>
          <div className="font-mono text-blue-300 mt-4 break-all">{hash}</div>
        </div>
        <p className="mb-4 text-sm text-gray-300">
          Jakim algorytmem zostało zakodowane to hasło? Wpisz MD5, SHA-256 lub
          SHA-512.
        </p>
        <input
          type="text"
          placeholder="Podaj algorytm"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="block w-full mb-4 p-2 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 bg-black opacity-50 text-white"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Sprawdź
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

export default TaskTwo;
