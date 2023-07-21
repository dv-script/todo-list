import { GlobalStyle } from "./GlobalStyles";

import AddNewTask from "./components/AddNewTask";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export interface ITaskList {
  id: number;
  task: string;
  completed: boolean;
}

const taskList: ITaskList[] = [
  {
    id: 1,
    task: "Estudar React",
    completed: true,
  },
  {
    id: 2,
    task: "Estudar Typescript",
    completed: false,
  },
  {
    id: 3,
    task: "Estudar Node",
    completed: true,
  }
];

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AddNewTask 
        taskList={taskList}
      />
      <ToDoList
        taskList={taskList}
      />
    </>
  );
}
