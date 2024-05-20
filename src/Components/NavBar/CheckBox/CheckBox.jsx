import React, {useState} from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import { Collapse } from '@mui/material';
import SelectComponent from "./SelectComponent/SelectComponent";
const CheckBoxComponent = ({checkboxName}) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const [selects]=useState([
        {
            id: 1,
            selectName: 'длина',
            options: [
                { id: 1, name: '2м' },
                { id: 2, name: '3м' },
                { id: 3, name: '4м' }
            ]
        },
        {
            id: 2,
            selectName: 'ширина',
            options: [
                { id: 1, name: '2м' },
                { id: 2, name: '3м' },
                { id: 3, name: '4м' }
            ]
        },
        {
            id: 3,
            selectName: 'толщина металла',
            options: [
                { id: 1, name: '0.5мм' },
                { id: 2, name: '0.7мм' },
                { id: 3, name: '1мм' }
            ]
        },
        {
            id: 4,
            selectName: 'толщина полика',
            options: [
                { id: 1, name: '4мм' },
                { id: 2, name: '6мм' },
                { id: 3, name: '8мм' }
            ]
        }
    ])
    return (
        <div>
            <FormControlLabel  control={<Checkbox
                checked={checked}
                sx={{color:"#2e2e2e",'&.Mui-checked': {
                        color: "#2e2e2e",
                    },}}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />} label={checkboxName} />
            <Collapse sx={{padding:"0 10px 0"}} in={checked}>
                {selects.map(select=><SelectComponent {...select} />)}
            </Collapse>
        </div>
    );
};

export default CheckBoxComponent;