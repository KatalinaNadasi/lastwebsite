// import React from 'react';
// import { render } from 'react-dom';
// import './css/style.css';
//
// class App extends React.Component {
//   render () {
//     return (
//       <div className="container">
//         <h1>Coucou</h1>
//       </div>
//     )
//   }
// }
//
//
// render (
//   App;
//   document.getElementById('root');
// );



const front = document.getElementById('landing-subtitle1');

const sousTitre = setTimeout(function(){
  front.style.display = "block";
  const sousTitreBarre = setTimeout(function(){
    front.style.textDecoration = "line-through";
  }, 4200);
  const sousTitreNone = setTimeout(function(){
    front.style.display = "none";
  }, 4500);
}, 4000);

const front2 = document.getElementById('landing-subtitle2');

const sousTitre2 = setTimeout(function(){
  front2.style.display = "block";
}, 9000);
