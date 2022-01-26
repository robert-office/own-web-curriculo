import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Stack } from '@mui/material';


interface Props {
    img?: string;
    nome?: string;
    tags?: string[];
    desc?: string;
    href?: string;
    hospedado?: string
}

export default function ProjetoCard(props: Props) {
    return (
        <Card sx={{ minWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.img}
                alt={props.nome}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.nome}
                </Typography>
                <Stack direction="row" className='pb-4 overflow-x-scroll my-4' spacing={1}>
                    {props.tags?.map((tag) => {
                        return (
                            <Chip label={tag} color="primary" />
                        )
                    })}
                </Stack>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                {props.href && (
                    <a href={props.href} target={'_blank'}>
                        <Button size="small">Ver GitHub</Button>
                    </a>
                )}

                {props.hospedado && (
                    <a href={props.hospedado} target={'_blank'}>
                        <Button size="small">Ver Hospedado</Button>
                    </a>
                )}
            </CardActions>
        </Card>
    );
}