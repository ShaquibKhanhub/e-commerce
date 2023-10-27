import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += Number(action.payload.price * action.payload.quantity);
    },
    addToCart:(state,action)=>{
      const item= action.payload;
      const isItemExist = state.cartItems.find(i=>i.id===item.id);

      if(isItemExist){
  state.cartItems.forEach(i=>{
      if(i.id===item.id){
          i.quantity+=1
      }
  })
      }
      else{
          state.cartItems.push(item);
      }
  },
  decreament:(state,action)=>{
      const item = state.cartItems.find(i=>i.id===action.payload);
      if(item.quantity>1){
          state.cartItems.forEach((i)=>{
              if(i.id===item.id)i.quantity-=1
          })
      }
  },
  deleteFromCart:(state,action)=>{
      state.cartItems=state.cartItems.filter((i)=>i.id!==action.payload)

  },
  calculatePrice:(state)=>{
      let sum=0;
      state.cartItems.forEach(i=>(sum+=i.price*i.quantity));
      state.subTotal=sum;
      state.shipping=state.shipping > 1000 ? 0:200;
      state.tax= +(state.subTotal*0.18).toFixed();
      state.total = state.subTotal+state.tax + state.shipping; 
  }
    
  },
});


export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
