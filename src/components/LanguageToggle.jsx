import { ToggleContainer, ToggleButton, Slider } from "./LanguageToggle.styles";
import { useLanguage } from "../hooks/useLanguage";

export default function LanguageToggle() {
    const { lang, setLang } = useLanguage();
    
    return (
        <ToggleContainer role="group" aria-label="Choose language">
            <ToggleButton
                active={lang === "sv"}
                onClick={() => setLang("sv")}
            >
            </ToggleButton>

            <ToggleButton
                active={lang === "en"}
                onClick={() => setLang("en")}
            >
            </ToggleButton>

            <Slider lang={lang} />
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