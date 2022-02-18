import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddMenu.css';
const AddMenu = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/menus',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-menu'>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} />
      <input {...register("description",)} />
      <input type="number" {...register("price", )} />
      <input {...register("img",)} />
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddMenu;