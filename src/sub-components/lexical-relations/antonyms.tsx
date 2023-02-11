import { useSearchWord } from '@/hooks';
import { Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'antonyms',
        headerName: 'Antónimos',
        flex: 1,
        editable: true,
    },
];

const Antonyms = () => {
    const { wordFound } = useSearchWord();

    const rows = wordFound.antonyms.map((word, index) => {
        return {
            id: index + 1,
            antonyms: word,
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
                        No hay palabras antónimas
                    </Stack>
                ),
            }}
            rows={rows}
            columns={columns}
            pageSize={rows.length}
            rowsPerPageOptions={[3]}
            hideFooter
            experimentalFeatures={{ newEditingApi: true }}
            initialState={{
                columns: {
                    columnVisibilityModel: {
                        id: false,
                    },
                },
            }}
        />
    );
};

export default Antonyms;
