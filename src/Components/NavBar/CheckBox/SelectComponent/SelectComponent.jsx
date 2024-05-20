import React from 'react';
import {InputLabel, MenuItem, Select, styled} from "@mui/material";
import InputBase from "@mui/material/InputBase";
const StyledSelect = styled(Select)(({ theme }) => ({
    borderColor:"red",
        '&:focus': {
            borderColor: 'red',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
}));
const SelectComponent = ({options,selectName}) => {
    const [value, setValue] = React.useState(options[0]?.id);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <InputLabel id="demo-simple-select-label">{selectName}</InputLabel>
            <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Age"
                onChange={handleChange}>
                {options.map(option =>(<MenuItem value={option.id}>{option.name}</MenuItem>))}
            </StyledSelect>
        </>
    );
};
export default SelectComponent;