import { createSlice } from '@reduxjs/toolkit';

interface IDataState {
  isLoading: boolean;
  data: [];
  actualListName: string;
  actualContent: [];
}

const initialState: IDataState = {
  isLoading: true,
  data: [],
  actualListName: '',
  actualContent: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    dataRequest(state) {
      state.isLoading = true;
    },
    setData(state, action) {
      state.data = action.payload[0];
      state.isLoading = false;
    },
    setActualListName(state, action) {
      state.actualListName = action.payload;
    },
    setActualContent(state, action) {
      state.actualContent = action.payload;
    },
  },
});

export const { dataRequest, setData, setActualListName, setActualContent } =
  dataSlice.actions;
export default dataSlice.reducer;
