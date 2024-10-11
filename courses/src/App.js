

import Random from './components/Random';
import React from 'react'
import Tag from './components/Tag';

const App = () => {
  return (
    <div className='bg-slate-500  w-full flex flex-col relative overflow-x-hidden items-center h-screen'>
      <h3 className=' bg-white font-bold text-2xl px-10 py-2 rounded-lg w-10/12 text-center mt-5'>Random GIF generator for all meme loversss.</h3>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random></Random>
        <Tag></Tag>
      </div>
      
    </div>
  )
}

export default App


// function App() {

//   useEffect(()=>{
//     const fetchdata = async ()=>{
   
//       const response = await fetch('https://codehelp-apis.vercel.app/api/get-top-courses');
//       const output = await response.json();
//       setData(output.data);
//       // console.log(data)
//       // console.log(output.data)
  
//   }
//     fetchdata()
//   },[])

//   const[data,setData]=useState()

  

//   return (
//     <div className="App bg-slate-400   w-full h-screen">
//       <card className="text-3xl flex w-">
//       <h3>{data.Business[0].description}</h3>
//       <img src='{data.Business[0].image.url}'></img>   
//       </card>
       
//     </div>
//   );
// }

// export default App;
