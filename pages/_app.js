import '../styles/global.scss'
import CartContext from '../components/CartContext'
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {

    const [cart, setCart] = useState([]);

    useEffect(() => {        
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    function addToCart(item){
        setCart([
            ...cart,
            item
        ])
    }

    
    return (
        <CartContext.Provider value={{cart: cart, addToCart: addToCart}}>
            <Component {...pageProps}/>
        </CartContext.Provider>
     )
}