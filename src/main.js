import React from 'react';
import { render } from 'react-dom';
import { style } from './css/style.css';

import AppRouter from './routes';

render(<AppRouter />, document.getElementById('app'));
