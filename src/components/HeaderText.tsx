import { Typography } from "@mui/material";

interface HeaderText {
    text: string
}

export const HeaderText = ({ text }: HeaderText) => {
    return (
        <Typography variant="h6" color={'white'} component="h6">
            {text}
        </Typography>
    );
}