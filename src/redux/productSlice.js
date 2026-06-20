import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fecthProduct = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();

    return data.products;
  },
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fecthProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fecthProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
