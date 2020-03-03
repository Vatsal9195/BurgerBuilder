import React from 'react';

import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;