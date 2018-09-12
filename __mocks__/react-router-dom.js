import React from 'react';
const ReactRouterDOM = require('react-router-dom');

/* eslint-disable react/prop-types */

ReactRouterDOM.BrowserRouter = ({ children }) => <div>{ children }</div>;

module.exports = ReactRouterDOM;