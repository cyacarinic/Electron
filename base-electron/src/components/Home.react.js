import React from 'react/addons';

var Home = React.createClass({
    render: function () {
        return (<div>
                <p>Home</p>
                <a href="#/settings">Settings.</a>;
                </div>)
    }
});

module.exports = Home;