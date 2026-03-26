import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useInstructions() {

    const [instructions, setInstructions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lang, setLang] = useState("sv");
    const [colorMode, setColorMode] = useState('light');
    const navigate = useNavigate();

    useEffect(() => {
        fetch("./src/data/instructions.json")
            .then((response) => response.json())
            .then((json) => setInstructions(json.instructions))
            .catch(err => console.error("Kunde inte ladda instruktioner", err));
    }, []);


    const nextStep = () => {
        if (currentIndex < instructions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            // If on last step -> Go to createProfile
        } else if (instructions.length > 0) {
            navigate("/create-profile");
        }
    };

    const previousStep = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const currentStep = instructions[currentIndex];

    return {
        currentStep,
        stepNumber: currentIndex + 1,
        totalSteps: instructions.length,
        lang,
        colorMode,
        nextStep,
        previousStep
    };
}