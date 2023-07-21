import * as S from "./styles";
import { ClipboardText } from "@phosphor-icons/react";
import { ITasks } from "./types";
import TaskCard from "../TaskCard";

export default function Tasks({ taskList }: ITasks) {
  return (
    <S.Container>
      {taskList.length === 0 ? (
        <S.EmptyTasksContainer>
        <ClipboardText size={56} color="var(--gray-400)" />
        <S.EmptyTasksText>
          <S.EmptyTasksTitle>
            Você ainda não tem tarefas cadastradas
          </S.EmptyTasksTitle>
          <S.EmptyTasksDescription>
            Crie tarefas e organize seus itens a fazer
          </S.EmptyTasksDescription>
        </S.EmptyTasksText>
      </S.EmptyTasksContainer>
      ) : (
        <TaskCard 
          taskList={taskList}
        />
      )}
    </S.Container>
  );
}
