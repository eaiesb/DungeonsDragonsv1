import './PreviewDialogue.css';
import { Alert, AlertTitle, Button, Card, CardActions, CardContent, CardHeader, Collapse, Dialog, DialogActions, DialogContent, IconButton, styled, TextField, Typography } from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PropAttr 
{
    onExpand  : any;
    onClose   : any;
    onError   : any;
    rowsData      : any;
    errorMessage  : any;
    onErrorClose  : any;
    previewOpen : boolean;
    expanded    : boolean;
}
export default function PreviewDialogue(props : PropAttr) 
{
  const {previewOpen, onError, errorMessage, rowsData, expanded, onExpand, onClose, onErrorClose} = props

  const ExpandMore = styled((props : {expand : boolean; [index: string]: any;}) => 
  {
    const { expand, ...other }  = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => 
    ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      }),
    }));


  return (
    <div>
      <Dialog open={previewOpen} sx={{ "& .MuiDialog-container": { "& .MuiPaper-root": { width: "100%", maxWidth: "750px" } } }}>
        <Card>
          <CardHeader
            action={
              <IconButton onClick={onClose}>
                {" "}
                <CancelOutlinedIcon />
              </IconButton>
            }
            title     ={rowsData.name}
            subheader ={rowsData.index}
          />
          <CardContent>
            <Typography  variant="body2" color="text.secondary"> {rowsData.desc}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore expand={expanded} onClick={onExpand} aria-expanded={expanded} aria-label="show more"> <ExpandMoreIcon /></ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className="cardheader">
              <TextField margin="dense" value={rowsData.higher_level} label="Higher Level" fullWidth disabled/>
              <TextField margin="dense" value={rowsData.range} label="Range" fullWidth disabled/>
              <TextField margin="dense" value={rowsData.components} label="Components" fullWidth disabled/>
              <TextField margin="dense" value={rowsData.material} label="Material" fullWidth disabled/>
              <TextField margin="dense" value={rowsData.ritual} label="Ritual" fullWidth disabled/>
              <TextField margin="dense" value={rowsData.duration} label="Duration" fullWidth disabled/>
              <TextField margin="dense" value={rowsData.concentration} label="Concentration" fullWidth disabled/>
            </CardContent>
          </Collapse>
        </Card>
      </Dialog>
      <Dialog open={onError} onClose={onErrorClose}>
        <DialogContent> 
          <Alert severity="error">
            <AlertTitle >Error</AlertTitle>
            <strong>{errorMessage} </strong>
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={onErrorClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
