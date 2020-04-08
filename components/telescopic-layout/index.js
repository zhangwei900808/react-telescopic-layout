import React, { PureComponent } from 'react';
import TlContainer from './TlContainer';
import TlContent from './TlContent';
import TlSidePanel from './TlSidePanel';
import TlSideToolbar from './TlSideToolbar';
import TlNavigation from './TlNavigation'
import { ThemeContext, themes } from './theme-context'

class TelescopicLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    }
  }
  componentDidMount() {
    let { theme: diyTheme } = this.props;
    if (diyTheme) {
      this.setState(state => ({
        theme: diyTheme
      }))
    }
  }
  render() {
    // let theme = this.context;

    return <ThemeContext.Provider value={this.state}>
      <TlContainer>
        <TlNavigation>
          <TlSideToolbar></TlSideToolbar>
          <TlSidePanel></TlSidePanel>
        </TlNavigation>
        <TlContent>
          <TlSidePanel></TlSidePanel>
        </TlContent>
      </TlContainer>
    </ThemeContext.Provider>
  }
}
TelescopicLayout.contextType = ThemeContext;
export default TelescopicLayout;
