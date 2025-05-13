import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  data: JSON.parse(localStorage.getItem("data")) || [],
  dataP: JSON.parse(localStorage.getItem("dataP")) || [],
  dataU: JSON.parse(localStorage.getItem("dataU")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getData(state, { payload }) {
      state.data.push({ ...payload, id: Date.now() }); 
      localStorage.setItem("data", JSON.stringify(state.data)); 
    },

    paidData(state, { payload }) {
      const item = state.data.find((todo) => todo.id === payload);
      const alreadyPaid = state.dataP.some((todo) => todo.id === payload);
      if (item) {
        if (item && !alreadyPaid) {
          state.dataP.push(item);
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
          state.dataP = state.dataP.filter((todo) => todo.id !== payload);
          localStorage.setItem("dataP", JSON.stringify(state.dataP));
          localStorage.setItem("dataU", JSON.stringify(state.dataU));
          localStorage.setItem("data", JSON.stringify(state.data));
        }
      }
    },
  },
});

export const { getData, deleteTodo, paidData, unpaidData } = todoSlice.actions;
export default todoSlice.reducer;
