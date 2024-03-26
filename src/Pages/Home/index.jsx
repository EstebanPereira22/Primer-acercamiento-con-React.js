import { useState, useEffect } from "react"//useEffect consume la API
import Layout from "../../Components/Layouts"
import Card from "../../Components/Card"
function Home() {
    const[items, setItems] = useState(null)//set items ayuda a almacenar la info
    useEffect(()=> {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
    },[])
    return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
      {
        items?.map(item =>(
         <Card key={item.id} data= {item}/>
        )
        )
      }
      </div>
   </Layout>
    )
    }
  
  export default Home
  