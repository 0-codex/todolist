import {createContext, ReactNode, useContext, useState} from "react";
import ViewerProvider, {ViewerContext} from "@/context/Viewer";
import PopupProvider, {PopupContext} from "@/context/Popup";
import Header from "@/components/Header";
import List from "@/components/List";
import Bar from "@/components/Bar";
import {list} from "postcss";

const TodoListContext = createContext<{
    listTodoList: {
        id: string,
        title: string,
        description: string,
        content: string
    }[],
    setListTodoList: (value: {
        id: string,
        title: string,
        description: string,
        content: string
    }[]) => void
} | null>(null)

function TodoListProvider({setList, list}: {
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
    }[]
}) {


    return (
        <TodoListContext.Provider value={{
            listTodoList: list,
            setListTodoList: setList
        }}>
        <div className={"w-screen h-screen bg-[#0D1B2A] flex flex-col overflow-hidden"}>
            <Header/>
            <div className={"flex flex-1 overflow-hidden"}>
                <div className={"w-[60vw] px-[10vw] py-[5vh] gap-y-[0.5vw] flex flex-col overflow-auto"}>
                    {
                        list.map(value => <List id={value.id} title={value.title}
                                                                         description={value.description}/>)
                    }
                </div>
                <ViewerProvider.Viewer/>
            </div>
            <Bar/>
        </div>
        </TodoListContext.Provider>
    )
}

export default TodoListProvider
export {TodoListContext}

