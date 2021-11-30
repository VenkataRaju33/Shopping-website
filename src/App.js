
import './App.css';
import axios from 'axios'
import Chart from './Chart';
import React,{ useEffect, useState } from "react";
const App=()=> {
  const [data,setData]=useState([])
  const [load,setLoad]=useState(false)
  const [filterItem,setFilterItem]=useState([])
  useEffect(()=>{
	axios.get('https://fakestoreapi.com/products')
	.then ((response)=>{
	  setData(response.data);
	
	} )
   },[]);
   const clickHandler=()=>{
	   setLoad(!load)
   }
  const changeHandler=(e)=>{

	const filterData= data.filter((item)=>item.title.toLowerCase().includes(e.target.value))
	
		setFilterItem(filterData)
	
	
	
  }
  const finalData=filterItem.length===0?data:filterItem;

    console.log(data)
	const dropHandler=(e)=>{
		setFilterItem(data.filter((item)=>item.category===e.target.value))
		
	}
  return (
	  <div className={load?'thing':''} >
	  <div className={load?'wild':''} >
	  	  <div className='drop'>
	  <select onChange={dropHandler} >
	  		<option >All Categories</option>
		  <option value="men's clothing" >Men's Clothing</option>
		  <option value="women's clothing">Women's Clothing</option>
		  <option value="jewelery">Jewelery</option>
		  <option value="electronics">Electronics</option>
	  </select>
	  
	  
	  <input type='text' placeholder='Search..'  onChange={changeHandler}/>
	  </div>
	 <div className={load?"gridd":"grid"}>
			 
	 			{finalData.map((item) => (
	 				<div key={ item.id } className='card' >
	 					<h3 style={{color:'blue'}} >{ item.title }</h3><br/>
	         			  <img  alt='' src={item.image}/><br/>
	 					<div className='flow' > { item.description }</div><br/>
			  
	 					<h1  >   $ { item.price }({item.rating.rate}*)</h1> 
			  
	 				</div>
	 			))}
				<button onClick={clickHandler} >Analyse</button>
	 		</div>
			 </div>

			 <div className={load?'chat':'chatt'} >
			 <Chart data={data} />
			 </div>
			 </div>
  );
}
export default App;
