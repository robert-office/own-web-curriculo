import { Typography } from "@mui/material";

export const NameSubSection = () => {
    return (
        <section className="w-full flex lg:flex-row flex-col lg:h-48 h-60 pt-10">
            <div className="lg:w-1/3 w-0">

            </div>
            <div className="lg:w-2/3 w-full flex lg:flex-row flex-col py-5">
                <div className="lg:w-1/2 w-full text-center lg:text-left h-full justify-center flex lg:justify-start mb-4 px-2">
                    <Typography variant="h3" sx={{verticalAlign: "text-bottom"}} color={'white'} component="h3">
                        Robert Uillians
                    </Typography>
                </div>
                <div className="lg:w-1/2 w-full text-center lg:text-left h-full flex justify-center lg:justify-start mb-4 px-2">
                    <Typography variant="h5" sx={{verticalAlign: "text-bottom"}} className="text-cinza" component="h5">
                        Web | Full-stack | Developer Jr.
                    </Typography>
                </div>
            </div>
        </section>
    );
}