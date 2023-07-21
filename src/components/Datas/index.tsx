import * as S from "./styles";
import { IDatasProps } from "./types";
import { useState, useEffect } from "react"; 

export default function Datas({ taskList }: IDatasProps) {

  const [finishedTasks, setFinishedTasks] = useState(0);

  useEffect(() => {
    const completedTasks = taskList.filter((task) => task.completed === true);
    setFinishedTasks(completedTasks.length);
  }, [taskList]);

  return (
    <S.Container>
      <S.CreatedTasksContainer>
        <S.CreatedTasksTitle>Tarefas criadas</S.CreatedTasksTitle>
        <S.CreatedTasksNumber>{taskList.length}</S.CreatedTasksNumber>
      </S.CreatedTasksContainer>

      <S.FinishedTasksContainer>
        <S.FinishedTasksTitle>Concluídas</S.FinishedTasksTitle>
        <S.FinishedTasksNumber>{finishedTasks} de {taskList.length}</S.FinishedTasksNumber>
      </S.FinishedTasksContainer>
    </S.Container>
  );
}
