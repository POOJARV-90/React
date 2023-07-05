import React from 'react';

function MyComponentWithWrapper({ name }) {
    return (
        <div style={{ backgroundColor: 'lightgray', padding: '20px' , fontSize:'35px' }}>
            {name}
        </div>
    )
}

function Wrapper() {
    return <MyComponentWithWrapper name="Wrapper" />;
}
export default Wrapper;
