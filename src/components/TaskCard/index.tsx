import * as S from "./styles";
import { ITaskCard } from "./types";
import { Trash, Check } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { ITaskList } from "./../../App";

export default function TaskCard({ taskList }: ITaskCard) {

  const [currentList, setCurrentList] = useState<ITaskList[]>([]);

  function handleFinished(key: number) {
    const newList = currentList.map((item) => {
      if (item.id === key) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setCurrentList(newList);
  }

  function handleDelete(key: number) {
    const newList = currentList.filter((item) => item.id !== key);
    setCurrentList(newList);
  }

  useEffect(() => {
    if (taskList) setCurrentList(taskList);
  }, [taskList]);

  return (
    <>
      {currentList.map((item) => (
        <S.TaskCardContainer key={item.id}>
          <S.TaskCardCheckBox
            type="checkbox"
            checked={item.completed}
            onChange={() => handleFinished(item.id)}
          />
          <S.TaskCardCheckBoxLabel>
            {item.completed && <Check size={14} weight="bold" color="var(--gray-200)"/>}
          </S.TaskCardCheckBoxLabel>
          <S.TaskCardText>{item.task}</S.TaskCardText>
          <S.TaskCardDeleteButton onClick={() => handleDelete(item.id)}>
            <Trash size={16} color="var(--gray-300)" />
          </S.TaskCardDeleteButton>
        </S.TaskCardContainer>
      ))}
    </>
  );
}
