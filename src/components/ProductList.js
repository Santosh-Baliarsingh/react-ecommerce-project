import React from 'react'
// import { useFilterContext } from "./context/FilterContext";
import GridView from './GridView';
import { useFilterContext } from '../context/FilterContext';

export default function ProductList() {
  const {filter_products , setGridView} = useFilterContext();

  if(setGridView){
    return(
      <GridView products={filter_products}/>
    )
  }
  return (
    <div>ProductList</div>
  )
}
