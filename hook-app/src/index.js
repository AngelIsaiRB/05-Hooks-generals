import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './Components/01-UseState/CounterApp';
import { CounterwithCustomHooks } from './Components/01-UseState/CounterwithCustomHooks';
import { FormWithCustomHook } from './Components/02-useEfect/FormWithcustomHook';
import { SimpleForm } from './Components/02-useEfect/SimpleForm';
// import { HooksApp } from './HooksApp';


ReactDOM.render(
 
    <FormWithCustomHook />,
 
  document.getElementById('root')
);
