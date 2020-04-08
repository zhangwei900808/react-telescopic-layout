import React, { PureComponent } from 'react';
import TlContainer from './TlContainer';
import TlContent from './TlContent';
import TlSidePanel from './TlSidePanel';
import TlSideToolbar from './TlSideToolbar';

class TelescopicPanel extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <TlContainer>
              <TlSideToolbar></TlSideToolbar>
              <TlSidePanel></TlSidePanel>
              <TlContent></TlContent>
            </TlContainer>
  }
}

export default TelescopicPanel;
