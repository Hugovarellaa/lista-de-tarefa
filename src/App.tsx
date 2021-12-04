import { useState } from "react";
import { Area, Container, Header } from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { GlobalStyled } from "./styles/global";
import { Item } from "./types/Item";

export function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pao na padaria", done: true },
    { id: 2, name: "Comprar um bolo na padaria", done: false },
  ]);

  function handleAddTask(taskmane: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskmane,
      done: false,
    });
    setList(newList);
  }

  return (
    <>
      <GlobalStyled />
      <Container>
        <Area>
          <Header>Lista de Tarefas</Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((Item, Index) => (
            <ListItem key={Index} item={Item} />
          ))}
        </Area>
      </Container>
    </>
  );
}
