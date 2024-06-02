import { createSlice,nanoid } from "@reduxjs/toolkit";
export const carsSlice=createSlice({
    name:'car',
    initialState:{
        searchTerm:'',
        carsList:[],
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm=action.payload;
        },
        addCar(state,action){
            state.carsList.push({
                name:action.payload.name,
                cost:action.payload.cost,
                id:nanoid(),
            });
        },
        removeCar(state,action){
            const updatedCars=state.carsList.filter((car)=>{
                return car.id!==action.payload
            });
            state.carsList=updatedCars;
        }
    },
})



export const {changeSearchTerm,addCar,removeCar} =carsSlice.actions;
export const carsReducer = carsSlice.reducer;