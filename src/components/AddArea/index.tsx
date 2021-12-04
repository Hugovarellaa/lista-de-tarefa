import { Container } from "./styles";
import { RiAddLine } from "react-icons/ri";
import { KeyboardEvent, useState } from "react";

type AddAreaProps = {
  onEnter: (taskmane: string) => void;
};

export function AddArea({ onEnter }: AddAreaProps) {
  const [inputText, setInputText] = useState("");

  function hanedleKeyUp(event: KeyboardEvent) {
    
    if (event.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  }

  return (
    <Container>
      <RiAddLine color="#fff" className="image" />
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyUp={hanedleKeyUp}
      />
    </Container>
  );
}
