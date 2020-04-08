import React, { PureComponent } from 'react';
import TpContainer from './TpContainer';
import TpContent from './TpContent';
import TpSidePanel from './TpSidePanel';
import TpSideToolbar from './TpSideToolbar';

class TelescopicPanel extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <TpContainer>
              <TpSideToolbar></TpSideToolbar>
              <TpSidePanel></TpSidePanel>
              <TpContent></TpContent>
            </TpContainer>
  }
}

export default TelescopicPanel;
