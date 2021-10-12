import { useState } from "react";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Compra o pão na padaria",
      done: false,
    },
    {
      id: 2,
      name: "Academia",
      done: true,
    },
  ]);

  const handleAddTask = (taskNAme: string)=>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskNAme,
      done: false
    })
    setList(newList);
  } 

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefa</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
