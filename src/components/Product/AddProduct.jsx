import React , {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
export default function AddProduct() {
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
            <h1>Add Product</h1>
        </div>
        </>
    )
}
