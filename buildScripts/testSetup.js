// This file isn't transpiled, so must use ES5

// Register babel to transpile before our tests run.
require('babel-register')();

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());