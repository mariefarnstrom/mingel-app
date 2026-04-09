import { ToggleContainer, ToggleButton, Slider } from "./Toggles.styles";
import { useLanguage } from "../hooks/useLanguage";
import { useColorMode } from "../hooks/useColorMode";

export default function LanguageToggle() {
    const { lang, setLang } = useLanguage();
    const { colorMode, setColorMode } = useColorMode();
    
    return (
        <ToggleContainer role="group" 
            aria-label="Choose language"
            colorMode={colorMode}>
                
            <ToggleButton
                active={lang === "sv"}
                onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            >
            </ToggleButton>

            <ToggleButton
                active={lang === "en"}
                onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            >
            </ToggleButton>

            <Slider lang={lang} colorMode={colorMode} isColorMode={false} />
        </ToggleContainer>
    );
}


// import { ToggleContainer, ToggleButton, Slider } from "./LanguageToggle.styles.jsx";
// import { useState } from "react";

// export default function LanguageToggle({ lang, setLang }) {

//     const [lang, setLang] = useState("sv"); // "sv" eller "en"

//     return (
//         <ToggleContainer
//             role="group"
//             aria-label="Välj språk"
//         >
//             <ToggleButton
//                 active={lang === "sv"}
//                 onClick={() => setLang("sv")}
//             >
//                 SV
//             </ToggleButton>

//             <ToggleButton
//                 active={lang === "en"}
//                 onClick={() => setLang("en")}
//             >
//                 EN
//             </ToggleButton>

//             <Slider lang={lang} />
//         </ToggleContainer>
//     );
// }