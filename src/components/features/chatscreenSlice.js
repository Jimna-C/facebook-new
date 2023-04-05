import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileOri from '../../assets/profile_ori.jpg';
import pro1 from '../../assets/profile_1.jpg';
import fireworks from '../../assets/fire_works.jpeg';
import spring from '../../assets/spring.jpg';
import pro2 from '../../assets/profile_2.jpg';
import pro3 from '../../assets/profile_3.jpg';
import pro4 from '../../assets/profile_4.jpg';
import pro5 from '../../assets/profile_5.jpg';
import story2 from '../../assets/pro_ch_1.jpg';
import story3 from '../../assets/pro_ch_2.jpg';
import story4 from '../../assets/pro_ch_3.jpg';
import story5 from '../../assets/pro_ch_4.jpg';

const initialState={
    items:[],
    status:null,
};

export const chatscreenFetch=createAsyncThunk(
    "chatscreen/chatscreenFetch",
    async()=>{
        const response=[
                {
                    id:1,
                    title:"Helen Seren",
                    image:pro1,
                    time:"2h",
                    messages:[],
                    storyImage:story2,
                },
                {
                    id:2,
                    title:"Tom Russo",
                    image:pro3,
                    time:"2dy",
                    messages:[],
                    storyImage:story3,
                },
                {
                    id:3,
                    title:"Aleena Peter",
                    image:pro2,
                    time:"5hr",
                    messages:[],
                    storyImage:story4,
                },
                {
                    id:4,
                    title:"Mary Joy",
                    image:pro4,
                    time:"5hr",
                    messages:[],
                    storyImage:story5,
                },
                {
                    id:5,
                    title:"Joy Harley",
                    image:pro5,
                    time:"5hr",
                    messages:[],
                    storyImage:"",
                },
              
            ]
        return response;
    }
)


const chatscreenSlice=createSlice({
    name:"chatscreen",
    initialState,
    reducers:{},
    extraReducers:{
        [chatscreenFetch.pending]:(state,action)=>{
            state.status="pending"
        },
        [chatscreenFetch.fulfilled]:(state,action)=>{
            state.status="success"
            state.items=action.payload
        },
        [chatscreenFetch.rejected]:(state,action)=>{
            state.status="rejected"
        }
    }
});


export default chatscreenSlice.reducer;