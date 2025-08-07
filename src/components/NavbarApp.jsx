import React from 'react'
import { Nav,NavbarBrand } from 'react-bootstrap'
export default function NavbarApp() {
return (
<div>
<Nav className='nav navbar-expand-md bg-dark text-white p-3 overflow-x-hidden fixed-top'>
{/* logo */}
<NavbarBrand className='fs-2 ms-1 text-white'>Blinkit App</NavbarBrand>

<button type='button' className='navbar-toggler btn btn-dark bg-dark float-end'  data-bs-toggle="collapse" data-bs-target="#navColl">
<span className='bi bi-grid text-white fs-1'></span>
</button>
<div className='collapse navbar-collapse' id='navColl'>
<ul className='navbar-links'>
<li><a href='#'>Home</a></li>
<li><a href='#'>about us</a></li>
<li><a href='#'>our services</a></li>
<li><a href='#'>contact us</a></li>
</ul>
</div>
</Nav>
</div>
)
}

