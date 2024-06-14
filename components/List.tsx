import {useContext} from "react";
import {TodoListContext} from "@/context/TodoList";
import {ViewerContext} from "@/context/Viewer";

export default function List({id, title, description}: {
    id: string,
    title: string,
    description: string
}) {
    const todoListContext = useContext(TodoListContext)
    const viewerContext = useContext(ViewerContext)

    const showContent = (id: string) => {
        const todolist = todoListContext?.listTodoList.find(value => value.id == id)
        if (!todolist) return

        if (todolist.id == viewerContext?.todolistSelected) {
            viewerContext?.setText("No todolist selected")
            viewerContext?.setTodolistSelected(null)
        } else {
            viewerContext?.setText(todolist.content)
            viewerContext?.setTodolistSelected(todolist.id)
        }
    }

    return (
        <>
            {
                viewerContext?.todolistSelected != id ? (
                    <div key={id} onClick={() => showContent(id)}
                         className={"flex gap-x-[2vw] px-[1vw] py-[0.5vw] rounded border border-[#1B263B] w-fit cursor-pointer hover:scale-95 duration-150"}>
                        <h1 className={"font-semibold text-[#E0E1DD]"}>{title}</h1>
                        <p className={"text-[#A7A7A7]"}>{description}</p>
                    </div>
                ) : (
                    <div key={id} onClick={() => showContent(id)}
                         className={"flex gap-x-[2vw] px-[1vw] py-[0.5vw] rounded bg-[#1B263B] border border-[#E0E1DD] w-fit cursor-pointer hover:scale-95 duration-150"}>
                        <h1 className={"font-semibold text-[#E0E1DD]"}>{title}</h1>
                        <p className={"text-[#A7A7A7]"}>{description}</p>
                    </div>
                )
            }
        </>
    )
}