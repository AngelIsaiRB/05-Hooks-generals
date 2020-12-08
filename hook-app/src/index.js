import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './Components/01-UseState/CounterApp';
import { CounterwithCustomHooks } from './Components/01-UseState/CounterwithCustomHooks';
import { FormWithCustomHook } from './Components/02-useEfect/FormWithcustomHook';
import { MultipleCustomHooks } from './Components/02-useEfect/MultipleCustomHooks';
import { SimpleForm } from './Components/02-useEfect/SimpleForm';
import { FocusScreen } from './Components/04-useRef/FocusScreen';
import { RealExampleRef } from './Components/04-useRef/RealExampleRef';
// import { HooksApp } from './HooksApp';


ReactDOM.render(
 
    <RealExampleRef />,
 
  document.getElementById('root')
);
