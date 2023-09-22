import cart from './assets/cart.svg'
import './CartWidget.css'

function CartWidget() {
  return (
    <div className="CartWidgetStyle">
        <img src={cart} alt='carro compra'/>
        0
    </div>
  )
}

export default CartWidget