import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileOri from '../../assets/profile_ori.jpg';
import pro1 from '../../assets/profile_1.jpg';
import fireworks from '../../assets/fire_works.jpeg';
import spring from '../../assets/spring.jpg';
import pro2 from '../../assets/profile_2.jpg';
import pro3 from '../../assets/profile_3.jpg';

const initialState={
    items:[],
    status:null,
};

export const newsfeedFetch=createAsyncThunk(
    "newsfeed/newsfeedFetch",
    async()=>{
        const response=[
                {
                    id:1,
                    title:"Helen Seren",
                    image:pro1,
                    content:"Best Fire works show I have ever seen!",
                    contentImage:fireworks,
                    like:100,
                    comment:364,
                    share:356,
                    time:"2h",
                    par:"",
                    isActive:""
                },
                {
                    id:2,
                    title:"Tom Russo",
                    image:pro3,
                    content:"With businesses implementing new digital transformation strategies, 2022 is set to be an exciting year. We will definitely see the emergence of new #promotions and #loyalty trends in the ecommerce industry.So if you want to prepare yourself for the year ahead, here are our top four promotions, loyalty and ecommerce predictions for 2022: https://bit.ly/3H2ZdYn #promotions #loyalty #ecommerce #ecommercetrends #promotiontrends",
                    contentImage:"",
                    like:200,
                    comment:23,
                    share:20,
                    time:"2dy",
                    par:"",
                    isActive:""
                },
                {
                    id:3,
                    title:"Aleena Peter",
                    image:pro2,
                    content:"Spring is getting v close!",
                    contentImage:spring,
                    like:234,
                    comment:12,
                    share:2,
                    time:"5hr",
                    par:"",
                    isActive:""
                },
              
            ]
        return response;
    }
)


const newsfeedSlice=createSlice({
    name:"newsfeed",
    initialState,
    reducers:{
        addToCart(state,action){
            const tempProduct={...action.payload};
            state.items.push(tempProduct);
            localStorage.setItem('Items', JSON.stringify(state));
        },
    },
    extraReducers:{
        [newsfeedFetch.pending]:(state,action)=>{
            state.status="pending"
        },
        [newsfeedFetch.fulfilled]:(state,action)=>{
            state.status="success"
            state.items=action.payload
        },
        [newsfeedFetch.rejected]:(state,action)=>{
            state.status="rejected"
        }
    }
});


export const {addToCart}=newsfeedSlice.actions;
export default newsfeedSlice.reducer;