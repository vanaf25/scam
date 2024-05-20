import {Button, styled} from "@mui/material";

const BlackButton = styled(Button)(({ theme }) => ({
    backgroundColor: "black",
    color:"white",
    '&:hover': {
        color:"black"
    },
}));
export const BlackButton2 = styled(Button)(({ theme }) => ({
    backgroundColor: "black",
    color:"white",
    borderColor:"black",
    '&:hover': {
        color:"white",
        borderColor: 'white',
    },
}));
export default BlackButton