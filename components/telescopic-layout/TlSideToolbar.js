import React, { PureComponent } from 'react';
import { ThemeContext, themes } from './theme-context'


class TlSideToolbar extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return <ThemeContext.Consumer>
            {({ theme }) => (
                <div className="side-toolbar">
                    {theme.background}
                </div>
            )}
        </ThemeContext.Consumer>
    }
}

export default TlSideToolbar;