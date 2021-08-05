import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from "axios";
import './AddtoCart.css'


const AddtoCart = props => {
    const cart = useSelector(state => state.cart)
    const totalItems = cart.reduce((acc, product) => acc + parseInt(product.amount), 0)
    const totalSum = cart.reduce((acc, product)=> acc + parseInt(product.amount * parseInt(product.price)), 0)
    const sendProductsToServer = () => {
        let formData = new FormData();
        cart.forEach(product => formData.append(product.id, product.amount))
        // cart.reduce((acc, product) => {
        //     const {id, amount} = product
        //     return {...acc, [product.id]: product.id}
        // }, {})
        axios({
            method: 'POST',
            url: 'https://datainlife.ru/junior_task/add_basket.php',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(response => console.log(response)).catch(err => console.log(err))
         
    }
    return(
        <footer>
            <p>Total items: {totalItems} </p>
            <p>Total sum: {totalSum}</p>
            <button onClick={sendProductsToServer}>AddtoCart</button>
        </footer>
    )
}

export default AddtoCart