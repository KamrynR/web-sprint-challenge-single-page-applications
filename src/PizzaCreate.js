import React, {useState, useEffect} from 'react';
import * as yup from "yup";
import axios from "axios";
import {Link} from 'react-router-dom';
import './PizzaCreate.css';

const PizzaCreate = props => {
    const defaultState = {
        name: '',
        size: '',
        sauce: '',
        specialInstructions: '',
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        extraCheese: false
    };
    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({...defaultState, terms: ''});

    let formSchema = yup.object().shape({
        name: yup.string().min(2, 'Name must be at least 2 characters'),
        size: yup.string(),
        sauce: yup.string(),
        specialInstructions: yup.string(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        canadianBacon: yup.boolean(),
        extraCheese: yup.boolean()
    })

    const formSubmit = e => {
        e.preventDefault();
        console.log('pizza submitted!');
        axios
            .post('https://reqres.in/api/users', formState)
            .then(() => console.log(formState))
            .catch(err => console.log(err));
    };
    const validateChange = e => {
        e.persist();
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => 
                setErrors({
                ...errors, 
                [e.target.name]: ''
            }))
            .catch(error => setErrors({
                ...errors,
                [e.target.name]: error.errors[0]
            }));
    }
    const inputChange = e => {
        // console.log(e.target.type);
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        });
        validateChange(e)
    };

    return (
        <div className='formBody'>
            <form className='signUpForm' onSubmit={formSubmit}>
                <h1>Create Pizza</h1>
                <div className='txtb'>
                    <input 
                        type='text'
                        name='name'
                        autoComplete='off'
                        value={formState.name}
                        onChange={inputChange}/>
                    <span data-placeholder="Name"><p className='error'>{errors.name}</p></span>                    
                </div>
                <select className='dropdown' name='size' onChange={inputChange}>
                    <option value=''>What size of pizza?</option>
                    <option value='Personal'>Personal 8"</option>
                    <option value='Small'>Small 10"</option>
                    <option value='Medium'>Medium 12"</option>
                    <option value='Large'>Large 14"</option>
                </select>
                <select className='dropdown' name='sauce' onChange={inputChange}>
                    <option value=''>What kind of sauce?</option>
                    <option value='Original Red'>Original Red</option>
                    <option value='Garlic Ranch'>Garlic Ranch</option>
                    <option value='BBQ Sauce'>BBQ Sauce</option>
                    <option value='Spinach Alfredo'>Spinach Alfredo</option>
                </select>
                <div className='toppings'>
                    <label className='pepperoni' htmlFor="pepperoni">
                        <p><input name='pepperoni' type='checkbox' onChange={inputChange}/> </p>
                         Pepperoni
                    </label>
                    <label className='sausage' htmlFor="sausage">
                        <p><input name='sausage' type='checkbox' onChange={inputChange}/> </p>
                         Sausage
                    </label>
                    <label className='canadianBacon' htmlFor="canadianBacon">
                        <p><input name='canadianBacon' type='checkbox' onChange={inputChange}/> </p>
                         Canadian Bacon
                    </label>
                    <label className='extraCheese' htmlFor="extraCheese">
                        <p><input name='extraCheese' type='checkbox' onChange={inputChange}/> </p>
                         Extra Cheese
                    </label>
                </div>
                <div className='txtb'>
                    <input 
                        type='text'
                        name='specialInstructions'
                        autoComplete='off'
                        value={formState.specialInstructions}
                        onChange={inputChange}/>
                    <span data-placeholder="Special Intructions"><p className='error'>{errors.name}</p></span>                    
                </div>
                <br/>
                <Link to='/pizzaorder/'>
                    <button className="order-button" type="submit" >Order</button>
                </Link>
            </form>
        </div>
)}

  export default PizzaCreate;