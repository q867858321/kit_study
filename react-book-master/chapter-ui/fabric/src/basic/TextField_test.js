import React,{Component} from 'react';
import { Fabric ,TextField} from '../office';
class TextField_text extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    change=(e)=>{
        console.log(e);
    }
    render() {
        return (
            <Fabric>
                <TextField label="Standard" onChanged={this.change} />
            </Fabric>
        );
    }
}

export default TextField_text;