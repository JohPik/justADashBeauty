import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'

export default class PaypalButton extends React.Component {

    render() {
        const onSuccess = (payment) => {
          console.log("The payment was succeeded!", payment)
          this.props.clearCart()
        }

        const onCancel = (data) => {
          console.log('The payment was cancelled!', data)
        }

        const onError = (err) => {
          console.log("Error!", err)
        }

        let env = 'sandbox';
        let currency = 'AUD'
        let total = this.props.total

    		let style = {
    			'label':'pay',
    			'tagline': false,
    			'size':'responsive',
    			'shape':'rect',
    			'color':'white'
    		}

        const client = {
            sandbox: process.env.REACT_APP_PayPal_ID,
            // production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn className="paypal-button" env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} style={style} />
        )
    }
}
