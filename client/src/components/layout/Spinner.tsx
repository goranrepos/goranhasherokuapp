import React, { Fragment } from 'react';
import spinner from './spinner.gif';

interface IOwnProps {}

type IProps = IOwnProps;

const Spinner: React.FC<IProps> = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner;
