import React from 'react';

class Tablebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            type: null,
            count: null,
            price: null
        }
    }

    render(){
        const{tname} = this.props;
        const{ttype} = this.props;
        const{tcount} = this.props;
        const{tprice} = this.props;

        return(
            <tr>
            <td>{tname}</td>
            <td>{ttype}</td>
            <td>{tcount}</td>
            <td>{tprice}</td>
            </tr>
        )
    }
}

export default Tablebar;