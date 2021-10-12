import { useState } from "react";
import * as C from "./App.styles";
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
  

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefa</C.Header>
        {/* Area de adicionar nova tarefa */}
        {/* Lista de tarefas */}

      </C.Area>

    </C.Container>
  );
};

export default App;
