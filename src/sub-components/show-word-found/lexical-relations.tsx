import { useSearchWord } from '@/hooks';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'synonyms',
        headerName: 'Sinónimos',

        flex: 1,
        editable: true,
    },
    {
        field: 'antonyms',
        headerName: 'Antónimos',

        flex: 1,
        editable: true,
    },
];

const LexicalRelations = () => {
    const { wordFound } = useSearchWord();

    const rows = wordFound.synonyms.map((word, index) => {
        return {
            id: index + 1,
            synonyms: word,
            antonyms: wordFound.antonyms[index],
        };
    });

    return (
        <Box sx={{ paddingBottom: '5rem' }}>
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'left',
                    color: 'secondary.contrastText',
                    fontWeight: 'bold',
                    paddingY: '2rem',
                }}
            >
                Relaciones léxicas
            </Typography>
            <Box sx={{ height: 370, width: '100%', bgcolor: 'primary.main' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={rows.length}
                    rowsPerPageOptions={[3]}
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </Box>
    );
};

export default LexicalRelations;
