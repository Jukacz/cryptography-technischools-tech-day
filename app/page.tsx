"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"; // Using FaTimes for the close icon
import TaskOne from "./components/TaskOne";
import TaskTwo from "./components/TaskTwo";
import TaskThree from "./components/TaskThree";
import TaskFour from "@/app/components/TaskFour";
import TaskFive from "@/app/components/TaskFive";

const IndexPage = () => {
  const [stage, setStage] = useState(1);
  const [isOpen, setIsOpen] = useState(false); // State to manage the dropdown menu

  const renderStageContent = () => {
    if (stage === 1) return <TaskOne />;
    if (stage === 2) return <TaskTwo />;
    if (stage === 3) return <TaskThree />;
    if (stage === 4) return <TaskFour />;
    if (stage === 5) return <TaskFive />;
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <header className="flex justify-center items-center bg-blue-900 text-white p-4">
        <h1 className="text-lg font-bold text-center w-full">
          Kryptografia dla 8 klasy
        </h1>
      </header>

      {/* Menu nawigacyjne */}
      <nav className="text-white flex justify-center py-2">
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            onClick={() => setStage(index + 1)}
            className={`px-8 py-4 mx-2 rounded-xl text-base ${
              stage === index + 1
                ? "bg-blue-600 text-2xl font-bold"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            Etap {index + 1}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <main className="flex-grow p-4">{renderStageContent()}</main>

      {/* Hamburger menu */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-4xl"
        >
          {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-20 p-4 bg-blue-800 text-white rounded-lg shadow-lg transition-transform transform scale-100">
            <ul className="flex flex-col space-y-2 text-3xl">
              <li>
                <a
                  href="https://docs.google.com/presentation/d/1QwijVPtt37kV9ME3EPo_Tif7KVEYYLdMa0UzpddnSMI/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center hover:text-blue-300"
                >
                  ℹ️
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
