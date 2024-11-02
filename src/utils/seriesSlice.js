import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    airingTodaySeries: null,
    ontheAirSeries: null,
    popularSeries: null,
    topRatedSeries: null,
  },

  reducers: {
    addAiringToday: (state, action) => {
      state.airingTodaySeries = action.payload;
    },
    addOnTheAirSeries: (state, action) => {
      state.ontheAirSeries = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
  },
});

export default seriesSlice.reducer;

export const {
  addAiringToday,
  addOnTheAirSeries,
  addPopularSeries,
  addTopRatedSeries,
} = seriesSlice.actions;
