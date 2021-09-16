import React from 'react';
import GetCommunityImages from '../../GetCommunityImages/GetCommunityImages';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div data-testid="test-Home" style={{ backgroundColor: "#12161f" }}>
            <Header />
            <GetCommunityImages />
        </div>
    );
};

export default Home;