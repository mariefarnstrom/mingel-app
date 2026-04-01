import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Data
import instructionsData from "../data/instructions.json";

export function useInstructions() {
    
    const instructions = instructionsData.instructions;
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentStep = instructions[currentIndex];
    const [lang, setLang] = useState("sv");
    const [colorMode, setColorMode] = useState('light');
    const navigate = useNavigate();

    const nextStep = () => {
        if (currentIndex < instructions.length - 1) {
            setCurrentIndex(prev => prev + 1);

            // If on last step -> Go to createProfile
        } else {
            navigate("/create-profile");
        }
    };

    const previousStep = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            navigate(-1);
        }
    };

    return {
        currentStep,
        instructions,
        stepNumber: currentIndex + 1,
        totalSteps: instructions.length,
        lang,
        colorMode,
        nextStep,
        previousStep
    };
}