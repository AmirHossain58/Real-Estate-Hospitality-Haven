import React from 'react';

const EstateSection = () => {
    fetch('/data.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
    return (
        <div>
            
        </div>
    );
};

export default EstateSection;