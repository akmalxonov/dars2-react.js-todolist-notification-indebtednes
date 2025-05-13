import { createSlice } from "@reduxjs/toolkit";

// Boshlang‘ich holat, localStorage'dan o‘qiladi, yo‘q bo‘lsa bo‘sh massiv
const initialState = {
  data: JSON.parse(localStorage.getItem("data")) || [],
  dataP: JSON.parse(localStorage.getItem("dataP")) || [],
  dataU: JSON.parse(localStorage.getItem("dataU")) || [],
};

// Slice yaratamiz
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Yangi todo qo‘shish
    getData(state, { payload }) {
      state.data.push({ ...payload, id: Date.now() }); // har bir todo'ga id biriktiramiz
      localStorage.setItem("data", JSON.stringify(state.data)); // localStorage ga saqlaymiz
    },
    paidData(state, { payload }) {
      const item = state.data.find((todo) => todo.id === payload);
      const alreadyPaid = state.dataP.some((todo) => todo.id === payload);
      if (item) {
        if (item && !alreadyPaid) {
          state.dataP.push(item);
          // state.data = state.data.filter((todo) => todo.id !== payload);
          state.dataU = state.dataU.filter((todo) => todo.id !== payload);
          localStorage.setItem("dataP", JSON.stringify(state.dataP));
          localStorage.setItem("dataU", JSON.stringify(state.dataU));
          localStorage.setItem("data", JSON.stringify(state.data));
        }
      }
    },
    unpaidData(state, { payload }) {
      const item = state.data.find((todo) => todo.id === payload);
      const alreadyPaidU = state.dataU.some((todo) => todo.id === payload);
      if (item) {
        if (item && !alreadyPaidU) {
          state.dataU.push(item);
          // state.data = state.data.filter((todo) => todo.id !== payload);
          state.dataP = state.dataP.filter((todo) => todo.id !== payload);
          localStorage.setItem("dataP", JSON.stringify(state.dataP));
          localStorage.setItem("dataU", JSON.stringify(state.dataU));
          localStorage.setItem("data", JSON.stringify(state.data));
        }
      }
    },
  },
});

// Action va reducer'ni eksport qilamiz
export const { getData, deleteTodo, paidData, unpaidData } = todoSlice.actions;
export default todoSlice.reducer;
