
import React from 'react';

const Skeleton = ({ className, ...props }) => {
    return (
        <div
            className={`skeleton-loader ${className}`}
            style={{
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                animation: 'pulse 1.5s infinite ease-in-out',
                ...props.style
            }}
            {...props}
        />
    );
};

export default Skeleton;
