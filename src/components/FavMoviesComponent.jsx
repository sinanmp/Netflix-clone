import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { createImageUrl } from '../services/movieServices'
import { AiOutlineClose } from 'react-icons/ai'
import { db } from '../services/farebase';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';

function FavMoviesComponent({user,movies}) {
    console.log(movies[0]?.backdrop_path)

    const slide = (offset)=>{
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + offset
      }


      const handleLikeShow = async(movie)=>{
        const userDoc = doc(db,'users' , user.email)
        await updateDoc(userDoc,{
            favShows:arrayRemove(movie)
        })
      }
    


    if(movies.length==0){
       return( 
        <>
     <h2 className='md:text-xl ml-10 font-extrabold capitalize'>Fav Shows</h2>
        <p className='ml-10 mt-5'>Empty shows!!</p>
        </>
    
        )
    }
  return (
    <>
    <h2 className='md:text-xl ml-6 font-extrabold capitalize'>Fav Shows</h2>

<div className='relative flex ml-4 items-center group'>
  <MdChevronLeft  onClick={()=>slide(-500)} className='bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block  cursor-pointer' size={40}/>
   <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
    { movies.map((movie)=>(
        <div key={movie.id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg-w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
        <img className='w-full h-40 object-cover block object-top' src={createImageUrl(movie.backdrop_path ?? movie.poster_path ,'w500')} alt={movie.title} />
        <div className=' absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
          <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full '>{movie.title}</p>
          <p>
            <AiOutlineClose onClick={()=>handleLikeShow(movie)} size={30}  className='absolute top-2 right-2' />
          </p>
        </div>
      </div>
    ))}
   </div>
   <MdChevronRight onClick={()=> slide(500)} className='bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block  cursor-pointer' size={40}/>
</div>

    </>
 
  )
}

export default FavMoviesComponent
