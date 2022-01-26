import { Typography } from "@mui/material";

interface HeaderTextP {
    text: string;
    href?: string
}

export const HeaderText = ({ text, href }: HeaderTextP) => {
    return (
        <a href={href}>
            <Typography variant="h6" color={'white'} component="h6">
                {text}
            </Typography>
        </a>
    );
}