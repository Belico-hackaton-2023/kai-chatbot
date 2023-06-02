import React, { useEffect, useState } from 'react'
import { glossary } from '../../data/glossary'

const SearchGlosary = ({ steps }) => {
  const { word } = steps
  const [definition, setDefinition] = useState()

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  const search = () => {
    const result = glossary.find(element => element.word.toLowerCase() === word?.value?.toLowerCase())
    console.log('===>', result)
    setDefinition(result?.definition)
  }
  useEffect(() => {
    search()
  }, [word])

  return (
    <div>
      <p>Esto es lo que se sobre: {word.value} </p>
      <p>{definition}</p>
      <span>si quieres mas informacion puedes buscar aqui</span>
      links
    </div>
  )
}

export default SearchGlosary