import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Language
import { useLanguage } from "./useLanguage";
import translations from "../translations/translations.json";

export function useInstructions() {

    const { lang } = useLanguage();
    const instructions = translations.instructions[lang];
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentStep = instructions[currentIndex];
    const navigate = useNavigate();

    const nextStep = () => {
        // Advance to next instruction or navigate to profile creation on completion
        // Handles boundary check to prevent going past last instruction
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
        nextStep,
        previousStep
    };
}