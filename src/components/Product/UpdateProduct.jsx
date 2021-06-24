import React, {useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';

export default function UpdateProduct() {
    const history = useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        { 
             history.push("/register");
    
        }
        },[])
    return ( <>
        <Header/>
        <div>
            <h1>Update Product</h1>
        </div>
        </>
    )
}
