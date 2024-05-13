import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todo:[
        {
            id:1,
            todo:"ToDo msg",
            checked: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo:(todo,id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(ToDoContext)
}
export const ToDoProvider = ToDoContext.Provider