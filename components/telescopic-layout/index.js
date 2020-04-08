import React, { PureComponent } from 'react';
import TlContainer from './TlContainer';
import TlContent from './TlContent';
import TlSidePanel from './TlSidePanel';
import TlSideToolbar from './TlSideToolbar';
import TlNavigation from './TlNavigation'

class TelescopicPanel extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <TlContainer>
      <TlNavigation>
        <TlSideToolbar></TlSideToolbar>
        <TlSidePanel></TlSidePanel>
      </TlNavigation>
      <TlContent>
        <TlSidePanel></TlSidePanel>
      </TlContent>
    </TlContainer>
  }
}

export default TelescopicPanel;
