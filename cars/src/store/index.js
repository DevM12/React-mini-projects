import {configureStore} from '@reduxjs/toolkit';
import {
    changeName,
    changeCost,
    formReducer
} from './slices/FormSlice';
import {
    changeSearchTerm,
    addCar,
    removeCar,
    carsReducer
} from './slices/CarsSlice'




const store=configureStore({
    reducer:{
        form:formReducer,
        cars:carsReducer
    }
})




export {
    store,
    changeName,
    changeCost,
    changeSearchTerm,
    addCar,
    removeCar,

}