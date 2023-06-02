import React from 'react'

const SearchGlosary = ({ steps }) => {
  const { word } = steps
  console.log('---->', word)


  return (
    <div>
      <p>Esto es lo que se sobre: {word.value} </p>
    </div>
  )
}

export default SearchGlosary