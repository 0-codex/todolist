import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {v4 as uuid} from "uuid";

const PopupContext = createContext<{
    setShowPopup: (value: boolean) => void
    isShowPopup: boolean
} | null>(null)

function PopupProvider({setList, list, children}: {
    setList: (value: {
        id: string,
        title: string,
        description: string,
        content: string
    }[]) => void,
    list: {
        id: string,
        title: string,
        description: string,
        content: string
    }[],
    children: ReactNode
}) {
    const [isShowPopup, setShowPopup] = useState<boolean>(false)

    const cancelTodoListButton = () => {
        setShowPopup(false)
    }

    const setTodoListButton = () => {
        const title = document.getElementById("popup-createTodolist-title") as HTMLInputElement
        const description = document.getElementById("popup-createTodolist-description") as HTMLInputElement
        const content = document.getElementById("popup-createTodolist-content") as HTMLDivElement

        if (title && description && content) {
            if (title.value.length > 0 && description.value.length > 0 && content.innerText.length > 0) {
                const todolist = {
                    title: title.value,
                    description: description.value,
                    content: content.innerHTML,
                    id: `todolist-${uuid()}`
                }

                setList([...list, todolist])
                setShowPopup(false)

            } else {
                console.warn("please complete")
            }
        } else {
            console.warn("id's is not found")
        }
    }

    return (
        <PopupContext.Provider value={{
            setShowPopup: setShowPopup,
            isShowPopup: isShowPopup
        }}>
            {children}
            <div id={"popup-createTodolist"} style={isShowPopup ? {display: "flex"} : {display: "none"}}
                 className={"absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 justify-center items-center"}>
                <div className={"rounded bg-[#0D1B2A] p-[1vw] gap-y-[1vw] flex flex-col"}>
                    <h1 className={"font-bold text-2xl text-[#E0E1DD] "}>Create TodoList</h1>
                    <hr/>
                    <div className={"px-[2.5vw] py-[1vw] flex flex-col gap-y-[2vw]"}>
                        <div className={"flex flex-col gap-y-[0.5vw]"}>
                            <div className={"flex flex-col gap-y-[0.5vw] w-fit"}>
                                <div className={"flex justify-between items-center gap-x-[1vw]"}>
                                    <p className={"font-semibold text-[#E0E1DD] "}>Titre</p>
                                    <input id={"popup-createTodolist-title"} type={"text"}
                                           className={"text-[#E0E1DD] outline-0 px-[0.5vw] py-[0.25vw] rounded w-[13vw] bg-[#1B263B] border-0"}/>
                                </div>
                                <div className={"flex justify-between items-center gap-x-[1vw]"}>
                                    <p className={"font-semibold text-[#E0E1DD] "}>Description</p>
                                    <input id={"popup-createTodolist-description"} type={"text"}
                                           className={"text-[#E0E1DD] outline-0 px-[0.5vw] py-[0.25vw] rounded w-[13vw] bg-[#1B263B] border-0"}/>
                                </div>
                            </div>
                            <div className={"flex flex-col gap-y-[0.5vw]"}>
                                <p className={"font-semibold text-[#E0E1DD] "}>Content</p>
                                <div contentEditable id={"popup-createTodolist-content"}
                                     className={"text-[#E0E1DD] outline-0 px-[0.5vw] py-[0.25vw] rounded w-[20vw] h-[20vh] overflow-auto bg-[#1B263B] border-0"}></div>
                            </div>
                        </div>

                        <div className={"flex justify-between"}>
                            <button
                                className={"bg-[#1B263B] px-[1vw] py-[0.5vw] rounded font-semibold hover:scale-95 duration-150 w-fit text-[#E0E1DD] "}
                                onClick={cancelTodoListButton}>Cancel
                            </button>
                            <button
                                className={"bg-[#1B263B] px-[1vw] py-[0.5vw] rounded font-semibold hover:scale-95 duration-150 w-fit text-[#E0E1DD] "}
                                onClick={(setTodoListButton)}>Create
                                TodoList
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PopupContext.Provider>
    )
}

export default PopupProvider
export {PopupContext}