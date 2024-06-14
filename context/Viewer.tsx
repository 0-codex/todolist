import {createContext, ReactNode, useContext, useState} from "react";

const ViewerContext = createContext<{
    setText: (text: string) => void,
    text: string,
    todolistSelected: string | null,
    setTodolistSelected: (id: string | null) => void
} |null>(null)

function ViewerProvider({ children }: { children: ReactNode }) {
    const [todolistSelected, setTodolistSelected] = useState<string | null>(null)
    const [text, setText] = useState<string>("No todolist selected");

    return (
        <ViewerContext.Provider value={{
            setText: setText,
            text: text,
            todolistSelected: todolistSelected,
            setTodolistSelected: setTodolistSelected
        }}>
            { children }
        </ViewerContext.Provider>
    )
}

function Viewer() {
    const viewerContext = useContext(ViewerContext)

    return (
        <div className={"flex-1 p-[2vw] bg-[#1B263B] rounded-l-xl text-[#E0E1DD]"} dangerouslySetInnerHTML={{__html: viewerContext?.text ? viewerContext?.text : "test"}}>
        </div>
    )
}

ViewerProvider.Viewer = Viewer
export default ViewerProvider
export { ViewerContext }