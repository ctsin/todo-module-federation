import { Box, Chip } from "@mui/material";
import { useList } from "host/hooks";

export const Counter = () => {
  const { list } = useList();

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", my: 1 }}>
      <Chip color="primary" size="small" label={`${list.length} item(s)`} />
    </Box>
  );
};
