// import React, {Component} from "react";

// export default function Condition() {
//     var myName = "Mohamed",
//         login = true;

//     return (
//         <div>
//             <h1>Condition</h1>
//             Username is :{login && myName}
//         </div>
//         );
// }

// rfc




// import React from 'react'

// export default function Navbar() {
//     return (
//         <div>
//             <nav>Hello I am navbar</nav>

//         </div>
//     )
// }

import { Link } from 'react-router-dom';

export default function Navbar()
{
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul>
        </nav>
    )
}