import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from '@faker-js/faker'
import { v4 as uuid } from 'uuid'
const addUsers = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://localhost:3005/users',
        {
            id: uuid(),
            name: faker.person.fullName(),
        }
    );
    return response.data;

});

export { addUsers }