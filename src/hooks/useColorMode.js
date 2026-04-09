import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";

export function useColorMode() {
    return useContext(ColorModeContext);
}