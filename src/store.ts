import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pointsReducer from './features/points/pointsSlice';

export const store = configureStore({
  reducer: {
    points: pointsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
