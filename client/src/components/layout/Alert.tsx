import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IAlert } from '../../types/Alert';
import { AppState } from 'store';

interface IOwnProps {}

type IProps = IOwnProps & mapStateToPropsI;

const Alert: React.FC<IProps> = ({ alerts }) => {
  return (
    <Fragment>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            <p className={`alert-${alert.alertType}__msg`}>{alert.msg}</p>
          </div>
        ))}
    </Fragment>
  );
};

interface mapStateToPropsI {
  alerts: IAlert[] | null;
}

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
