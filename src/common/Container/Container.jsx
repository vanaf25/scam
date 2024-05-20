import React from 'react';

const Container = ({children}) => {
    return (
        <div style={{maxWidth:1300,padding:"0px 10px",margin:"0 auto"}}>
            {children}
        </div>
    );
};

export default Container;