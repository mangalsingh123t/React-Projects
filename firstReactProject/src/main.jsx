import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Mangal from './banna.jsx'     
//componant ka name uppercase me hi likha jata he 

  // function App(){
  //   return(
  //     <>
  //     <div>
  //       Its Mangal Banna
  //     </div>
  //     </>
  //   )
  //  }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App></App> */}
   <App />
    {/* <Mangal /> */}
  </React.StrictMode>
) 

//  iss tarah se bhi kr sakte he 
//  const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

