import { GridColumns } from "@mui/x-data-grid";


export const DragonTable: GridColumns = 
[
  { field: 'actions', headerName: 'Preview', width: 100,},
  { field: "index", headerName: "Index", width: 180 },
  { field: "name", headerName: "Name"},
];