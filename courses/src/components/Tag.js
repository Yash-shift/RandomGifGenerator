import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const Tag = () => {

  const[tag,setTag]=useState('car')

  const API_KEY = process.env.REACT_APIKEY;
  const[gif,setGif]=useState('')
  const[loading,setLoading] = useState('false')

  function changeHandler(event){
    setTag(event.target.value)
    
  }
  

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
    setLoading(true)
    const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
   const {data}= await axios.get(url)
   const imageSource=data.data.images.downsized_large.url;
   console.log(imageSource)
   setGif(imageSource)
   setLoading(false)
  }

  function clickHandler(){
    fetchData()

  }

  return (
    <div className='w-3/5 bg-green-500  border  border-black rounded-lg
     text-center align items-center py-6  gap-y-2 flex flex-col'>
        <h1 className='font-bold underline'>Radnom GIF Generator</h1>
         {
          loading?(<Spinner/>):(<img src={gif} width="450" className='text-center'/>)
         }
         <input className='w-2/5 text-center text-lg py-2 rounded-xl' onChange={changeHandler} value={tag}/>
        

        <button onClick={clickHandler} className=' mt-2 mb-2 bg-white opacity-60 text-xl px-2 rounded-md text-black w-2/5' >
          Generate
        </button>
      
    </div>
  )
}

export default Tag
