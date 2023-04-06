import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';


// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt+QHFqVkFrWU5FaV1CX2BZfFlzR2lZeU4QCV5EYF5SRHJfQ1xmTHxWdEZiUH0=;Mgo+DSMBPh8sVXJ1S0d+X1ZPc0BDQmFJfFBmR2lcfVRwckUmHVdTRHRcQlljSH9Wc0dmW3xadHY=;ORg4AjUWIQA/Gnt2VFhhQlJDfVpdXHxLflF1VWFTelx6dFNWACFaRnZdQV1nSX9Sc0BhXH1ddX1X;MTU4Mjc5OEAzMjMxMmUzMTJlMzMzN2N5dHI1bWl5TEFWWnNIK0tVb0ZxdTJQbXpXUmlpTlNhVVVrd1FlaVo0K2s9;MTU4Mjc5OUAzMjMxMmUzMTJlMzMzN2pScmdZRWxDblhaN3ZnMmRaeUYzQ2toVCsrc0tFTTJ0dDhoWitCZ09JV1k9;NRAiBiAaIQQuGjN/V0d+XU9HcVRHQmJWfFN0RnNbdVtyflVAcDwsT3RfQF5jTX5Sd0BmW3pcdHZQRA==;MTU4MjgwMUAzMjMxMmUzMTJlMzMzN0Z2djRZL1RpRnRIaEdqcE5hUkEreVArUUJhSnhVWTdZODY2dElzWEZzODg9;MTU4MjgwMkAzMjMxMmUzMTJlMzMzN0phZFhsajVSbEcvdWVUWjNIUU5vaENGUlk0SExaUEU3dWxhV09OaHQ1R289;Mgo+DSMBMAY9C3t2VFhhQlJDfVpdXHxLflF1VWFTelx6dFNWACFaRnZdQV1nSX9Sc0BhXH1aeH1X;MTU4MjgwNEAzMjMxMmUzMTJlMzMzN1pxMnRITHZlWUtkYzhURDJ1N2VoUUlyTFgzam8za2l3MUQzNDlOWkFjRGM9;MTU4MjgwNUAzMjMxMmUzMTJlMzMzN1l6TWpYOERiNExMdHl4NVBDeEVXbHBka1VoNlNTeGIxWittWXBLZ3g0UXc9;MTU4MjgwNkAzMjMxMmUzMTJlMzMzN0Z2djRZL1RpRnRIaEdqcE5hUkEreVArUUJhSnhVWTdZODY2dElzWEZzODg9');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
