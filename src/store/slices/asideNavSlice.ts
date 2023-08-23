import { createSlice } from '@reduxjs/toolkit';

interface IAsideNavState {
  isOpen: boolean;
}

const initialState: IAsideNavState = {
  isOpen: true,
};

const asideNavSlice = createSlice({
  name: 'asideNav',
  initialState: initialState,
  reducers: {
    setAsideNavState(state) {
      console.log('asdasd');

      state.isOpen = !state.isOpen;
    },
  },
});

export const { setAsideNavState } = asideNavSlice.actions;
export default asideNavSlice.reducer;
