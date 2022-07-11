import "./Dungeons.css";
import * as React from "react";
import { DragonTable } from "../../Utils/DragonData";
import getAllRecords, { getNameRecords } from '../../Middleware/get-api';
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid-pro";
import PreviewIcon from '@mui/icons-material/Preview';
import PreviewDialogue from "../PreviewDialogue/PreviewDialogue";
import { Link } from "@mui/material";

export default function Dungeons() 
{
  const [rows, setRows] = React.useState([]); // For payload to the rows

  const [rowsData,setRowsData]= React.useState([]); // For Payload to Dialog Rows

  const [errorMessage,setErrorMessage]= React.useState(""); // For the api error message
  
  const [expanded, setExpanded] = React.useState(false);

  const onExpand = () => {setExpanded(!expanded)};
  
  // For Error handling
  const onErrorClose = () => {setOnError(false);};
  const [onError,setOnError]= React.useState(false);
  const errorAlert = () => {setOnError(true)};

  // For Preview Dialoge
  const onClose = () => {setPreviewOpen(false)};
  const [previewOpen, setPreviewOpen] = React.useState(false);
  
// Rendering data to the Preview Icon
  DragonTable[0].renderCell = function renderCellData(params)
    {
      return <GridActionsCellItem icon={<PreviewIcon onClick={()=>onNameClick(params.row.index)}/>} label="Preview" />
    }
  
  DragonTable[1].renderCell = function renderCellData(params)
    {
      return nameLink(params.value)
    }
  
  const nameLink = (name : string) => {
      return <Link onClick={()=>onNameClick(name)}>{name}</Link>
    }

  const onNameClick=(name : string)=>
  {
    getNameRecords(name).then(response =>
    {
      setRowsData(response.data)
      setPreviewOpen(true)
      }).catch((error)=>
      {
        errorAlert()
        setErrorMessage(error.message)
      });
  }
// Setting api response to the rows along with Error Response

  const resultData = React.useMemo(async () =>{
      const response = await getAllRecords();
      setRows(response.data.results);},[]).catch((error)=>
        {
          errorAlert()
          setErrorMessage(error.message)
        });

    // console.log(resultData)


  return (
    <div>
      <div className="header">
        <h1>The 5th Edition Dungeons and Dragons API</h1>
        <div className="link">
        <Link
          component="button"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Button Link
        </Link>
        </div>
      </div>
      <div>
        <DataGrid rows={rows} pageSize={20} autoHeight={true} columns={DragonTable} rowsPerPageOptions={[50]} getRowId={(row) => row.index} components={{ Toolbar: GridToolbar }} componentsProps={{ toolbar: { showQuickFilter: true } }} />
      </div>
      <PreviewDialogue onError={onError} rowsData={rowsData} expanded={expanded} onExpand={onExpand} onClose={onClose} onErrorClose={onErrorClose} previewOpen={previewOpen} errorMessage={errorMessage} />
    </div>
  );
}


