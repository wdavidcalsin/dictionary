import {
    Layout,
    LogoDictionary,
    SearchWord,
    ShowWordFound,
} from '@/components';

const Home = () => {
    return (
        <Layout>
            <LogoDictionary />
            <SearchWord />
            <ShowWordFound />
        </Layout>
    );
};

export default Home;
