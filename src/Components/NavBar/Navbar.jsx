import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {Box, Checkbox, styled, TextField} from "@mui/material";
import CheckBoxComponent from "./CheckBox/CheckBox";
import MinMaxPriceForm from "./MinMaxPriceForm/MinMaxPriceForm";
import {alpha} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
const BootstrapInput = styled(TextField)(({ theme }) => ({
    "& input":{
      borderColor:"black"
    },
    '& input:focus': {
            border: "2px solid black",
        }
}));
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#2e2e2e',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2e2e2e',
        },
    },
});
const Navbar = () => {
    const [data,setData]=useState([
        {
            checkboxName: 'szklarnia/tunel',
            id: 1
        },
        {
            checkboxName: 'szklarnia/domek',
            id: 2
        },
        {
            checkboxName: 'huśtawka',
            id: 3
        },
        {
            checkboxName: 'bania/beczka',
            id: 4
        },
        {
            checkboxName: 'dodatki',
            id: 5
        },
        {
            checkboxName: 'poliwęglan',
            id: 6
        }
    ]);
    return (
        <Box sx={{p:2}}>
            <CssTextField
                fullWidth id="outlined-basic" label="Enter a name" variant="outlined" />
            {data.map(el=><CheckBoxComponent key={el.id}
                {...el}
            />)}
            <MinMaxPriceForm minPrice={100} maxPrice={1000}/>
        </Box>
    );
};

export default Navbar;