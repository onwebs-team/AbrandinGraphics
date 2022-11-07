import React from 'react';

import './clients.css';

let onwebs = require('./img2/Onweb.png');
let primis = require('./img2/Primis.png');
let cobwebs = require('./img2/Cobwebs.png');
let trullion = require('./img2/Trullion.png');



function Clients(props) {
    return (
        <div className='client'>
            <div className="row">
                <div className="slide">
            <img src={onwebs} alt=""/>
            </div>
            </div>
            <div className="row">
                <div  className="slide">
            <img src={primis} alt=""/>
            </div>
            </div>
            <div className="row">
                <div  className="slide">
            <img src={cobwebs} alt=""/>
            </div>
            </div>
            <div className="row">
                <div  className="slide">
            <img src={trullion} alt=""/>
            </div>
            </div>
          
           


           

                

            
        </div>
    );
}

export default Clients;







// import React from 'react'
// import { Link } from 'react-router-dom'

// export default class App extends React.Component {

// state = {
//     imageSrc: 'https://c.tenor.com/TReUojNlZ6wAAAAi/js-javascript.gif',
//     imageAlt: ''
//   }

//   listenScrollEvent = event => {
//     if (event.srcElement.body.scrollY > 400) {
//       this.setState({
//         imageSrc: 'https://c.tenor.com/57w9du3NrV0AAAAS/css-html.gif',
//         imageAlt: 'smartlogger white logo'
//       })
//     } else {
//       this.setState({
//         imageSrc: 'https://c.tenor.com/57w9du3NrV0AAAAS/css-html.gif',
//         imageAlt: 'smartlogger colored logo'
//       })
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.listenScrollEvent)
//   }

//   render() {
//   return (
//     <header className='header-area header-sticky'>
//       <div className='container' style={{height:"200vh"}}>
//         <div className='row'>
//           <div className='col-12'>
//             <nav className='main-nav'>
//               {/* ***** Logo Start ***** */}
//               <a href='/#' className='logo'>
//                 {/* <style>{css}</style> */}
//                 <img
//                   src={this.state.imageSrc}
//                   alt='Smartlogger logo'
//                 />
//               </a>
//               {/* ***** Logo End ***** */}
//           </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
//   }
// }