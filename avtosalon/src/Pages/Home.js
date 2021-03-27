import React from "react";

import SearchBar from '../Components/SearchBar';
import CarsTable from '../Components/CarsTable';
import PaginationBar from '../Components/PaginationBar';

const Home = () => {
    return(
        <div align="center">
            <SearchBar />
            <CarsTable />
            <PaginationBar />
        </div>
    )
}

export default Home;