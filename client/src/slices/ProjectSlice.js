import { createSlice, createAsyncThunk, isPending, isRejected } from "@reduxjs/toolkit";
import projectService from "../services/ProjectService";

const initialState = {
    projects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createProject = createAsyncThunk('projects/create', async (projectData, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.admin.token;
        return await projectService.createProject(projectData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const getProjects = createAsyncThunk('projects/getprojects', async (_, thunkAPI) => {
    try{
        return await projectService.getProject();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const deleteProject = createAsyncThunk('projects/delete', async (id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.admin.token;
        return await projectService.deleteProject(id, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        reset: state => { 
            state.isError = false,
            state.isSuccess = false,
            state.isLoading = false,
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projects.push(action.payload);
        })
        .addCase(getProjects.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projects = action.payload;
        })
        .addCase(deleteProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projects = state.projects.filter(project => project._id !== action.payload.id);
        })
        .addMatcher(isPending(createProject, getProjects, deleteProject), (state) => {
            state.isLoading = true;
        })
        .addMatcher(isRejected(createProject, getProjects, deleteProject), (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})

export const { reset } = projectSlice.actions;
export default projectSlice.reducer;