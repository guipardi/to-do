import { ReactNode, createContext, useState } from "react";

interface Task {
  description: string
  id: Date
}

interface TasksContextType {
  tasks: Task[],
  createNewTask: (data: any) => void
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

  return (
    <TasksContext.Provider value={
      { tasks, createNewTask } 
    }>
      {children}
    </TasksContext.Provider>
  )
}
