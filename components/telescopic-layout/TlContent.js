import React, { PureComponent } from 'react';

class TlContent extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return <div>
            <div>this is content</div>
            {children}
        </div>
    }
}

export default TlContent;