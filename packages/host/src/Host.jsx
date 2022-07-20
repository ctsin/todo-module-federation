import { Input } from "input/input";
import { List } from "list/list";
import { Counter } from "counter/counter";
import { useList } from "./hooks";

export const Host = () => {
  const { list } = useList();
  console.log("🚀 ~ file: Host.jsx ~ line 7 ~ Host ~ list", list);

  return (
    <>
      <Counter />
      <Input />
      <List />
    </>
  );
};
