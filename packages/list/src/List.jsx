import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { useList } from "host/hooks";
import {
  List as MuiList,
  ListItem,
  Button,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

export const List = () => {
  const { list, removeItem } = useList();

  const onClick = (id) => {
    removeItem(id);
  };

  if (!list.length) {
    return (
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BookmarkAddIcon color="disabled" fontSize="large" />
        <Typography sx={{ py: 1, color: "gray" }}>Nothing Here</Typography>
      </Box>
    );
  }

  return (
    <MuiList>
      {list.map(({ title, id }, index) => (
        <ListItem
          key={index.toString()}
          secondaryAction={
            <Button variant="text" size="small" onClick={() => onClick(id)}>
              REMOVE
            </Button>
          }
        >
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </MuiList>
  );
};
