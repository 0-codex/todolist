import {PopupContext} from "@/context/Popup";
import {useContext} from "react";

export default function Bar() {
    const popupContext = useContext(PopupContext)

    const click = () => {
        popupContext?.setShowPopup(true)
    }

    return (
        <div className={"w-full px-[10vw] py-[3vh]"}>
            <button
                className={"bg-[#1B263B] text-[#E0E1DD] px-[1vw] py-[0.5vw] rounded font-semibold hover:scale-95 duration-150 w-fit"}
                onClick={click}>Create
                TodoList
            </button>
        </div>
    )
}