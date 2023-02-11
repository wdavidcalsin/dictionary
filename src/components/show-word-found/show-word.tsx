import { messageSearchingWords } from '@/constants';
import { useSearchWord } from '@/hooks';
import {
    Definition,
    EmptySearchPrompt,
    LexicalRelations,
} from '@/sub-components';
import { Box } from '@mui/material';

const ShowWordFound = () => {
    const { wordFound } = useSearchWord();

    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                display: 'flex',
                justifyContent: 'center',
                paddingX: '1rem',
            }}
        >
            <Box
                sx={{
                    width: '40rem',
                    height: '100%',
                }}
            >
                {wordFound.searchWord ? (
                    <>
                        {wordFound.definitions.length ? (
                            <>
                                <Definition />
                                <LexicalRelations />
                            </>
                        ) : (
                            <EmptySearchPrompt
                                message={messageSearchingWords.NODEFINITIONFOUND(
                                    wordFound.searchWord
                                )}
                            />
                        )}
                    </>
                ) : (
                    <EmptySearchPrompt
                        message={messageSearchingWords.EMPTYSEARCHWORD}
                    />
                )}
            </Box>
        </Box>
    );
};

export default ShowWordFound;
