import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import MovieRow from '../components/movieRow'
import endpoints from '../services/movieServices'


function home() {
  return (
    <>
       <Banner/>
      <MovieRow title='upcoming' url={endpoints.upcoming} />
      <MovieRow title='trending' url={endpoints.trending} />
      <MovieRow title='top rated' url={endpoints.topRated} />
      <MovieRow title='comedy' url={endpoints.comedy} />
      <MovieRow title='popular' url={endpoints.popular} />
    </>
  )
}

export default home



