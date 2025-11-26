import  { Component } from 'react';
import info from './info.json';

import {AppLayout} from './layout/AppLayout.tsx';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { info: info }
    }
    componentDidMount() {

        this.setState({ info: info })

    }


    render() {
        return (
            <AppLayout info={this.state.info}></AppLayout>
        );
    }
}

export default App;

