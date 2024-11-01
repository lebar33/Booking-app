import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    rooms: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

//create room
export const createRoom = createAsyncThunk("room/create", async (roomData, thunkApi) => {
    try {
        const res = await fetch("/api/rooms", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(roomData),
        })
        if (!res.ok) {
            const error = await res.json();
            // console.log("Error response:", error);
            return thunkApi.rejectWithValue(error);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.messsage);
        return thunkApi.rejectWithValue(error.message);
    }
})

//get all rooms
export const getRooms = createAsyncThunk("room/getall", async (_, thunkApi) => {
    try {
        const res = await fetch("/api/rooms");
        if (!res.ok) {
            const error = await res.json();
            return thunkApi.rejectWithValue(error);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
        return thunkApi.rejectWithValue(error.message);
    }
})

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        // add cases here
        builder
            .addCase(createRoom.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.rooms = action.payload;
            })
            .addCase(createRoom.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getRooms.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRooms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.rooms = action.payload;
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
})


export const { reset } = roomSlice.actions;
export default roomSlice.reducer;