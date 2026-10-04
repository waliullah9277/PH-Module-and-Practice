import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {
    console.log("Dashboard page rendering")
    return (
        <div>
            <h2>Dashboard page here</h2>
            <Counter></Counter>
        </div>
    );
};

export default DashboardPage;