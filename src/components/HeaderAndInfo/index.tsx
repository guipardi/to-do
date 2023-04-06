import { Header } from "./Header";
import { NewTask } from "./NewTaskInput";
import { TasksInfo } from "./TasksInfo";

export function HeaderAndInfo() {
  return (
    <>
      <Header />
      <NewTask />
      <TasksInfo />
    </>
  )
}