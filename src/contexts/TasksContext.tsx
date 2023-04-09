import { ReactNode, createContext, useState } from "react";

interface Task {
  description: string
}

interface TasksContextType {
  tasks: Task[],
  createNewTask: () => void
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksProviderProps {
  children: ReactNode
}

export function TasksProvider({children}: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function createNewTask() {
    setTasks([...tasks, {description: 'task1'}])
  }

  return (
    <TasksContext.Provider value={
      { tasks, createNewTask } 
    }>
      {children}
    </TasksContext.Provider>
  )
}