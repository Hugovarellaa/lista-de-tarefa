import * as C from "./styles";
import { Item } from "../../types/item";
import { useState } from "react";

type ListItemProps = {
  item: Item;
};

export function ListItem({ item }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(evento) => setIsChecked(evento.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
}
