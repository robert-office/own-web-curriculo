import Typography from "@mui/material/Typography";

interface Props {
    icon?: string;
    title?: string;
    rounded?: boolean
}

export const LogoTecnologia = ({ icon, title, rounded }: Props) => {
    return (
        <div className="w-full h-full flex-col">
            <div className="w-full h-5/6 flex justify-center">
                <div className={`md:w-40 md:h-40 h-36 w-36 ${rounded ? "rounded-full bg-cover" : 'bg-contain'} bg-center bg-no-repeat`} style={{backgroundImage: `url(${icon})`}}></div>
            </div>
            <div className={`w-full h-1/6 ${rounded ? 'rounded-full' : '' }`}>
                <Typography variant="h6" className="text-cinza text-center" component="h6">
                    {title}
                </Typography>
            </div>
        </div>
    );
}