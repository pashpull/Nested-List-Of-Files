import { createSlice } from '@reduxjs/toolkit';
import IFile from '../../interfaces/IFile';
import IDirectory from '../../interfaces/IDirectory';

interface IDataState {
  isLoading: boolean;
  data?: IDirectory;
  actualListName: string;
  actualContent?: IFile[];
}

const initialState: IDataState = {
  isLoading: true,
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
