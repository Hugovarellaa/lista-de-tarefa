import { Container } from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";

type ListItemProps = {
  item: Item;
};

export function ListItem({ item }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <Container isActive={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      />
      <label>
        {item.name} - {item.done.toString()}
      </label>
    </Container>
  );
}
