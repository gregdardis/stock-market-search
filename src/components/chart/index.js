import { connect } from 'react-redux';

import Chart from './Chart';

const testData = [
  { date: 'TODAY', price: 400 },
  { date: 'TOMORROW', price: 3000 },
  { date: 'THE NEXT DAY', price: 16000 }];

const mapStateToProps = state => ({
  data: testData
});

export default connect(
  mapStateToProps
)(Chart);