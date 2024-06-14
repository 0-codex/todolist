'use client'

import {createElement, useContext, useState} from "react";
import Header from "@/components/Header";
import Bar from "@/components/Bar";
import PopupProvider, {PopupContext} from "@/context/Popup";
import ViewerProvider, {ViewerContext} from "@/context/Viewer";
import List from "@/components/List";
import TodoList, {TodoListContext} from "@/context/TodoList";
import TodoListProvider from "@/context/TodoList";

export default function Home() {
    const [listTodoList, setListTodoList] = useState<{
        id: string,
        title: string,
        description: string,
        content: string
    }[]>([])

    return (
        <>
            <PopupProvider list={listTodoList} setList={setListTodoList}>
                <ViewerProvider>
                    <TodoList list={listTodoList} setList={setListTodoList}/>
                </ViewerProvider>
            </PopupProvider>
        </>
    )
}
