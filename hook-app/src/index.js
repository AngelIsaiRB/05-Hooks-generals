import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './Components/01-UseState/CounterApp';
import { CounterwithCustomHooks } from './Components/01-UseState/CounterwithCustomHooks';
import { FormWithCustomHook } from './Components/02-useEfect/FormWithcustomHook';
import { MultipleCustomHooks } from './Components/03-examples/MultipleCustomHooks';
import { SimpleForm } from './Components/02-useEfect/SimpleForm';
import { FocusScreen } from './Components/04-useRef/FocusScreen';
import { RealExampleRef } from './Components/04-useRef/RealExampleRef';
import { LayoutEffect } from './Components/05-useLayoutEffect/LayoutEffect';
import { Memorize } from './Components/06-memos/Memorize';
import { MemoHook } from './Components/06-memos/MemoHook';
import { CallbackHook } from './Components/06-memos/CallbackHook';
// import { HooksApp } from './HooksApp';


ReactDOM.render(
 
    <CallbackHook />,
 
  document.getElementById('root')
);
