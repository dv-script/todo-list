import * as S from "./styles";
import { useState, FormEvent } from "react";
import { IAddNewTaskProps } from "./types";

export default function AddNewTask({ taskList }: IAddNewTaskProps ) {
  const [task, setTask] = useState("");
  const [id, setId] = useState(4);

  function handleNewId() {
    setId((prev) => prev + 1);
  }

  function handleAddNewTaskOnList(e: FormEvent) {
    e.preventDefault();
    handleNewId();
    taskList.push({
      id: id,
      task: task,
      completed: false,
    });
    setTask("");
  }

  return (
    <S.FormContainer onSubmit={handleAddNewTaskOnList}>
      <S.Input
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setTask(e.target.value)}
        required
        value={task}
      />
      <S.Button>Criar</S.Button>
    </S.FormContainer>
  );
}
