import * as S from "./styles";
import { IToDoList } from "./types";

import Datas from "../Datas";
import Tasks from "../Tasks";

export default function ToDoList({ taskList }: IToDoList) {
  return (
    <S.Container>
      <Datas 
        taskList={taskList}
      />
      <Tasks 
        taskList={taskList}
      />
    </S.Container>
  )
}
