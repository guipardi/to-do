import { ReactNode, createContext, useState } from "react";

interface Task {
  description: string
  id: Date
}

interface TasksContextType {
  tasks: Task[],
  createNewTask: (data: any) => void,
  deleteTask: (id: string) => void
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksProviderProps {
  children: ReactNode
}

export function TasksProvider({children}: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function createNewTask(data: any) {
    setTasks((state) => [...state, {description: data.description, id: new Date()}])
  }

  function deleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => {
      if (String(task.id) !== id) {
        return task
      }
    })

    setTasks(filteredTasks)
  }

  return (
    <TasksContext.Provider value={
      { tasks, createNewTask, deleteTask } 
    }>
      {children}
    </TasksContext.Provider>
  )
}
