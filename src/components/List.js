import React from "react";
import { ListItem } from "./ListItem";

export function List(props) {
  return (
    <div>
      {props.items.map((item, i) => (
        <ListItem key={i} item={item} />
      ))}
    </div>
  );
}
