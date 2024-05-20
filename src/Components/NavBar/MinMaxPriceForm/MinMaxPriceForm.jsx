import React, {useEffect, useState} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";
import {Box, Button, Slider, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import * as yup from 'yup'
import useUpdateQueryString from "../../../hooks/useUpdateQueryString/useUpdateQueryString";
import BlackButton from "../../../common/BlackButton/BlackButton";
const minDistance=0;
const schema=yup.object().shape({
    min:yup.number().required(),
    max:yup.number().required()
})
function valuetext(value) {
    return `${value}°C`;
}
const MinMaxPriceForm= ({minPrice,maxPrice}) => {
    const [searchParams]=useSearchParams()
    const  maxPriceParameter=searchParams.get("priceEnd")
    const minPriceParameter=searchParams.get("priceStart")
    const [value, setValue] = React.useState([minPrice,maxPrice]);
    useEffect(()=>{
        if (maxPriceParameter && +maxPriceParameter<=maxPrice)    setValue((prevState =>([prevState[0],+maxPriceParameter]) ));
        else setValue(prevState =>([prevState[0],maxPrice]));
    },[maxPriceParameter,maxPrice]);
    useEffect(()=>{
        if (minPriceParameter && +minPriceParameter>=minPrice)     setValue(prevState =>([+minPriceParameter,prevState[1]]));
        else setValue(prevState =>([minPrice,prevState[1]]));
    },[minPriceParameter,minPrice]);
    useEffect(()=>{
        if (!maxPriceParameter) setValue(prevState =>([prevState[0],maxPrice]) )
    },[maxPrice]);
    useEffect(()=>{
        if (!minPriceParameter) setValue(prevState =>([minPrice,prevState[1]]) )
    },[minPrice]);
    const handleChange = (
        event,
        newValue,
        activeThumb
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
            }
        } else {
            setValue(newValue);
        }
    };
    const {handleSubmit, formState: { errors },control } = useForm({
    });
    const update=useUpdateQueryString();
    const onSubmit=()=>{
        update(
            {
                priceStart:String(value[0]),
                priceEnd:String(value[1])
            }
        )
    }
    return (
        <Box sx={{p:2}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{mb:0.5}}>Price</Typography>
                <Box sx={{display:"flex",alignItems:'center'}}>
                    <TextField     sx={{mr:1}}
                                   value={value[0]}
                                   onChange={(e)=>setValue(prevState =>([+e.target.value,prevState[1]]) )}
                                   size="small"
                                   defaultValue={minPrice}
                                   variant="outlined" />
                    <Typography   sx={{mr:1}}>-</Typography>
                    <TextField     sx={{mr:1}}
                                   value={value[1]}
                                   onChange={(e)=>setValue(prevState =>(
                                       [prevState[0],+e.target.value]) )}
                                   size="small"
                                   defaultValue={maxPrice}
                                   variant="outlined" />
                    <BlackButton type="submit">Ok</BlackButton>
                </Box>
                <Slider
                    min={minPrice}
                    max={maxPrice}
                    sx={{width:200,color:"#2e2e2e"}}
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </form>
        </Box>
    );
};
export default MinMaxPriceForm