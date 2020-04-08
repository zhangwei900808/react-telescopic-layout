import React,{PureComponent} from 'react';

class TlSideContainer extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        const {children} = this.props;
        return <div>{children} </div>
    }
}
export default TlSideContainer;