import remote from 'remote';
import Router from 'react-router';
import React from 'react';

import routeContainer from './router';
import routes from './routes';
import template from './menutemplate';

const Menu = remote.require('menu')

Menu.setApplicationMenu(Menu.buildFromTemplate(template()));

var router = Router.create({
    routes: routes
});

router.run((Handler) => {
    React.render(<Handler/>,document.body);
});

routeContainer.set(router);