import React from 'react'

const Hello = () => {
    /* With JSX
    return (
        <div className='dummyClass'>
            <h1>Hello JSX</h1>
        </div>
    ) */
    // Without JSX
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello without jsx')
    )
}

export default Hello