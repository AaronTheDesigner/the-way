import React, {useRef, useEffect} from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const src = "https://www.paypal.com/sdk/js?client-id=AboaGUimkAu1y6Nq-UspenCyd9bPbIOPA7HTPnMsolMXkNmVG0Wt-eNa6BdfUHb_asAubIIHbPYLA6SW&vault=true&intent=subscription"
const sdk="button-factory"

const Sub = () => {

    const paypal = useRef();

    
  return (
    <div className="">
        <PayPalScriptProvider options = {{
            "client-id": "AboaGUimkAu1y6Nq-UspenCyd9bPbIOPA7HTPnMsolMXkNmVG0Wt-eNa6BdfUHb_asAubIIHbPYLA6SW",
            "vault": "true",
            "intent": "subscription"
            }}>
            <PayPalButtons
            createSubscription = {(data, actions) => {
                return actions.subscription.create({
                    plan_id: "P-29828884TJ323543KMQ5QD4I",
                    quantity: 1
                })
            }}

            onApprove = {(data, actions) => {
                return alert(data.subscriptionID);
            }}
            />
        </PayPalScriptProvider>

    </div>
    
  )
}

export default Sub

// <div id="paypal-button-container-P-29828884TJ323543KMQ5QD4I"></div>
// <script src="https://www.paypal.com/sdk/js?client-id=AboaGUimkAu1y6Nq-UspenCyd9bPbIOPA7HTPnMsolMXkNmVG0Wt-eNa6BdfUHb_asAubIIHbPYLA6SW&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
// <script>
//   paypal.Buttons({
//       style: {
//           shape: 'rect',
//           color: 'blue',
//           layout: 'vertical',
//           label: 'subscribe'
//       },
//       createSubscription: function(data, actions) {
//         return actions.subscription.create({
//           /* Creates the subscription */
//           plan_id: 'P-29828884TJ323543KMQ5QD4I',
//           quantity: 1 // The quantity of the product for a subscription
//         });
//       },
//       onApprove: function(data, actions) {
//         alert(data.subscriptionID); // You can add optional success message for the subscriber here
//       }
//   }).render('#paypal-button-container-P-29828884TJ323543KMQ5QD4I'); // Renders the PayPal button
// </script>