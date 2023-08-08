import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        productId: 11112222,
        productImageUrl:
          "https://ae01.alicdn.com/kf/H5df32367736244e988c9557636286b6a4.jpg",
        productName: "Laptop",
        productDesc: "New Gen Laptop",
        productPrice: 62999,
      },
      {
        productId: 33334444,
        productImageUrl:
          "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fHww&w=1000&q=80",
        productName: "Mobile",
        productDesc: "Latest Mobile",
        productPrice: 45999,
      },
      {
        productId: 55556666,
        productImageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Generic_Camera_Icon.svg/1213px-Generic_Camera_Icon.svg.png",
        productName: "Camera",
        productDesc: "DSLR Camera",
        productPrice: 38999,
      },
    ],
  },
  reducers: {
    addNewProduct: (state, { payload }) => {
      state.products = [...state.products, payload];
    },
  },
});

export const { addNewProduct } = productSlice.actions;
export default productSlice.reducer;
