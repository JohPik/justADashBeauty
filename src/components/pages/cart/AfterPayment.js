import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const AfterPayment = () => {
  const [ count, setCount] = useState(10)

  const decrement = setInterval( () => {
    if (count > 0 ) {
      setCount(count - 1)
    }
    clearInterval(decrement)
  }, 1000)

  return(
    <section className="successful-payment">
      <div className="successful-payment-text-container">
        <p>Awesome, your <span>payment</span> was <span>successful</span>, you will receive an confirmation email shortly. Thanks for our order!</p>
        <div className="timer">
          You will be automativally redirected to the <Link to="/">Home Page</Link> in <span>{count}</span> seconds.
        </div>
      </div>
    </section>
  )
}

export default AfterPayment
