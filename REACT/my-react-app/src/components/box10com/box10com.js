import "./box10com.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import { useData } from "../../DataStore";






const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  

  {
    field: 'intensity',
    headerName: 'Intensity',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'sector',
    headerName: 'Sector',
    width: 150,
    editable: true,
  },
  {
    field: 'topic',
    headerName: 'Topic',
    width: 150,
    editable: true,
  },
  {
    field: 'insight',
    headerName: 'Insight',
    width: 150,
    editable: true,
  },
  {
    field: 'region',
    headerName: 'Region',
    width: 150,
    editable: true,
  },
  {
    field: 'start_year',
    headerName: 'Start Year',
    width: 150,
    editable: true,
  },
  {
    field: 'impact',
    headerName: 'Impact',
    width: 150,
    editable: true,
  },
  {
    field: 'added',
    headerName: 'Added',
    width: 150,
    editable: true,
  },
  {
    field: 'published',
    headerName: 'Published',
    width: 150,
    editable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
    editable: true,
  },
  {
    field: 'relevance',
    headerName: 'Relevance',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'pestle',
    headerName: 'Pestle',
    width: 150,
    editable: true,
  },
  {
    field: 'source',
    headerName: 'Source',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
    editable: true,
  },
  {
    field: 'likelihood',
    headerName: 'Likelihood',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'url',
    headerName: 'URL',
    width: 250,
    editable: true,
  },
];








function Box10com(){

  const sampledDatabox10 = useData().map((row, index) => ({
    ...row,
    id: index + 1, // You can use any unique identifier here
  }));


    return( 
        <div className="box10com">
            <div className="heading">
                <div>
                    <h2>U.S. Crude Oil Production Outlook</h2>
                    <span>Recovering from Recent Declines in the Energy Sector</span>
                    
                </div>

                <div className="box10chart">

                <Box sx={{ height: 600, width: '100%' }}>
                       <DataGrid
                        slots={{ toolbar: GridToolbar }}
                        slotProps={{
                          toolbar: {
                              printOptions: { disableToolbarButton: true },
                              csvOptions: { disableToolbarButton: true }
                      }}}
                         rows={sampledDatabox10}
                         columns={columns}
                         initialState={{
                           pagination: {
                             paginationModel: {
                               pageSize: 8,
                             },
                           },
                         }}
                         pageSizeOptions={[5]}
                         checkboxSelection
                         disableRowSelectionOnClick
                         disableColumnSelector
                         disableDensitySelector
                         
                       />
                     </Box>

                

         
    
                


               

                    

                    


                </div>
            
            </div>
           

        </div>
    );


}

export default Box10com;