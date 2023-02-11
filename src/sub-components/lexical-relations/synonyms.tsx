import { useSearchWord } from '@/hooks';
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'synonyms',
        headerName: 'Sinónimos',
        flex: 1,
        editable: true,
    },
];

const Synonyms = () => {
    const { wordFound } = useSearchWord();

    const rows = wordFound.synonyms.map((word, index) => {
        return {
            id: index + 1,
            synonyms: word,
        };
    });

    return (
        <DataGrid
            components={{
                NoRowsOverlay: () => (
                    <Stack
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                    >
                        No hay palabras sinónimas
                    </Stack>
                ),
            }}
            rows={rows}
            columns={columns}
            pageSize={rows.length}
            rowsPerPageOptions={[3]}
            hideFooter
            initialState={{
                columns: {
                    columnVisibilityModel: {
                        id: false,
                    },
                },
            }}
            sx={{
                textOverflow: 'initial',
                overflowX: 'auto',
                wordWrap: 'break-word',

                '.MuiDataGrid-cellContent': {
                    textAlign: 'left',
                    whiteSpace: 'pre-wrap',
                    overflow: 'visible',
                    textOverflow: 'initial',
                },
            }}
        />
    );
};

export default Synonyms;
