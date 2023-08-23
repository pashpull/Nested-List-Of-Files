import { createSlice } from '@reduxjs/toolkit';

interface IDataState {
  isLoading: boolean;
  data: {};
  report: {};
  actualListName: string;
}

const initialState: IDataState = {
  isLoading: true,
  data: {},
  report: {},
  actualListName: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    dataRequest(state) {
      state.isLoading = true;
    },
    setData(state, action) {
      state.data = action.payload[0].contents;
      state.report = action.payload[1];
      state.isLoading = false;
    },
    setActualListName(state, action) {
      state.actualListName = action.payload;
    },
  },
});

export const { dataRequest, setData, setActualListName } = dataSlice.actions;
export default dataSlice.reducer;
