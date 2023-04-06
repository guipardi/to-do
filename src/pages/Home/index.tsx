import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTaskInput";
import { TasksInfo } from "../../components/TasksInfo";

export function Home() {
  return (
    <>
      <Header />
      <NewTask />
      <TasksInfo />
    </>
  )
}