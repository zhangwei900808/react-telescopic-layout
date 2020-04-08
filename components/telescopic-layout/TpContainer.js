import React,{PureComponent} from 'react';

class TpContainer extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        const {children} = this.props;
        return <div>{children} </div>
    }
}
export default TpContainer;