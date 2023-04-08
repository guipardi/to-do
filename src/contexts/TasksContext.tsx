import { ReactNode, createContext, useState } from "react";

interface Task {
  description: string
}

interface TasksContextType {
  tasks: Task[]
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksProviderProps {
  children: ReactNode
}

export function TasksProvider({children}: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <TasksContext.Provider value={
      { tasks } 
    }>
      {children}
    </TasksContext.Provider>
  )
}