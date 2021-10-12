import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

interface AddAreaProps {
  onEnter: (taskNAme: string) => void;
}

export const AddArea = ({ onEnter }: AddAreaProps) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (evento: KeyboardEvent) => {
    if (evento.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText('');
    }
  };

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(evento) => setInputText(evento.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
