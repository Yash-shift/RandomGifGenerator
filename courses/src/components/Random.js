import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const Random = () => {

  const API_KEY = process.env.REACT_APIKEY;
  const[gif,setGif]=useState('')
  const[loading,setLoading] = useState('false')
  

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
    setLoading(true)
    const url= 'https://api.giphy.com/v1/gifs/random?api_key=zbjCTclC0CjwKdNvdgJoIg3wONWAfksK';
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
    <div className='w-3/5 bg-orange-500  border  border-black rounded-lg
     text-center align items-center py-6  gap-y-2 flex flex-col'>
        <h1 className='font-bold underline'>Radnom GIF Generator</h1>
         {
          loading?(<Spinner/>):(<img src={gif} width="450" className='text-center'/>)
         }
        

        <button onClick={clickHandler} className=' mt-2 mb-2 bg-white opacity-60 text-xl px-2 rounded-md text-black w-2/5' >
          Generate
        </button>
      
    </div>
  )
}

export default Random
