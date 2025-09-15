import React, { useEffect,useState } from "react";
import './List.css';
import axios from "axios";
import { toast } from "react-toastify";
 
const List =() =>{

    const url = "http://localhost:4000"
    const[list,setList] = useState([]);

    const fetchList = async()=>{
        const response = await axios.get(`${url}/api/food/list`)
        console.log(response.data);
        if(response.data.success){
            setList(response.data.data)
        }
        else{
            toast.error("Error")
        }
    }

    const removeFood = async(foodId)=>{
        const response  = await axios.post(`${url}/api/food/remove`,{id:foodId})
        await fetchList();
        if(response.data.success){
            toast.success(response.data.mesaage)
        }

        else{
            toast.error("Error");
        }
        console.log(foodId);

    }

    useEffect(()=>{
        fetchList();
    },[]
    
    )
    return(
        <div className="list add flex-col">
            <p>All Foods List</p>

            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>PriceAction</b>
                    <b></b>


                </div>
                {list.map((item,index)=>{
                    return(
                        <div key={index} className="list-table-format">

                            <img src={`${url}/image/`+item.image}></img>
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p className="cursor" onClick={()=>removeFood(item._id)}>x</p>


                        </div>
                    )

                }
            
            )}

            </div>

         </div>
    )
}

export default List;