import AddTaskIcon from "@mui/icons-material/AddTask";
import { nanoid } from "nanoid";
import { Paper, InputBase, Divider } from "@mui/material";
import { useState } from "react";
import { useList } from "host/hooks";

export const Input = () => {
  const { addItem } = useList();
  const initial = "";
  const [value, setValue] = useState(initial);

  const onChange = (event) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const todo = { title: value, id: nanoid() };
    addItem(todo);

    setValue(initial);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
      }}
      p={3}
      onSubmit={onSubmit}
    >
      <AddTaskIcon color="primary" sx={{ mx: 2 }} />

      <Divider orientation="vertical" flexItem />

      <InputBase
        onChange={onChange}
        value={value}
        variant="outlined"
        placeholder="Create a Todo"
        fullWidth
        sx={{ mx: 3 }}
      />
    </Paper>
  );
};
