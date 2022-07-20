import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../store/listSlice";

export const useList = () => {
  const dispatch = useDispatch();
  const list = useSelector(({ list: { list } }) => list);

  const addItem = (item) => {
    dispatch(add(item));
  };

  const removeItem = (id) => {
    dispatch(remove(id));
  };

  return { list, addItem, removeItem };
};
