import { AlertText, ClipboardImg, NoTasksContainer } from "./styles";
import clipboardImg from "../../assets/clipboard.svg"

export function NoTasks() {
  return (
    <NoTasksContainer>
      <ClipboardImg src={clipboardImg} alt="" />

      <AlertText>
        <strong>Você ainda não tem tarefas cadastradas.</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </AlertText>
    </NoTasksContainer>
  )
}