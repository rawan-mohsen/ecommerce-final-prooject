// import React, { Component } from 'react'

// export default class TestTwo extends Component {
//     state = {
//         data: [
//             { name: "Ahmed", job: "Doctor", id: 1 },
//             { name: "Ali", job: "Doctor", id: 2 },
//             { name: "Sara", job: "Doctor", id: 3 },
//             { name: "Mai", job: "Doctor", id: 4 }
//         ]
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.data.map((dataPp) =>
//                     <div key={dataPp.id}>
//                         <div>{dataPp.name}</div>
//                         <p>{dataPp.job}</p>
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class TestTwo extends Component {
//     isVisited = true;
//     myName = "Ali";
//     render() {
//         return (
//             <div>
//                 {this.isVisited ? this.myName : "Unknown name"}
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class TestTwo extends Component {

    state = {
        name: "Ali",
    }
    handleClick = () => {
        console.log("clicked");
        console.log(this)
    }

    handleChange = (ev) => {
        this.setState({ name: ev.target.value })
    }

    render() {
        return (
            <div>
                <h2>RespondingToEvents</h2>
                <input type="text" placeholder='Please enter your name' onChange={this.handleChange} value={this.state.name} />
                <div className='m-2'>{this.state.name}</div>
                <button onClick={this.handleClick}>click me in class</button>
            </div>
        )
    }
}
