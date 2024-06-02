import { useContext } from "react";
import NavigationContext from "../context/navigation";
export default function UseNavigation(){
    return useContext(NavigationContext)
}