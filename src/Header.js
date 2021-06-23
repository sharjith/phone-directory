import React from 'react'


function Header() {

    const headerStyle = {
        textAlign: 'center',
        padding: 20,
        background: '#000',
        color: '#fff',
        textTransform: 'uppercase'
     };
     
    return (
        <div style={headerStyle}>
            Phone Directory
        </div>
    )
}

export default Header
