import { AlertText, ClipboardImg, NoTasksContainer, WithTasks } from "./styles";
import clipboardImg from "../../assets/clipboard.svg"

export function Home() {
  return (
    <>
      <NoTasksContainer>
        <ClipboardImg src={clipboardImg} alt="" />

        <AlertText>
          <strong>Você ainda não tem tarefas cadastradas.</strong>
          <br />
          Crie tarefas e organize seus itens a fazer
        </AlertText>
      </NoTasksContainer>

      <WithTasks>
        <h1>Tasks</h1>
      </WithTasks>
    </>
  )
}