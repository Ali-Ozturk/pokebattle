import React, {Component} from 'react';

class DefaultScreenLayout extends Component {
    render() {
        return (
            <div className={'text-center p-4'}>
                {this.props.children}
            </div>
        );
    }
}

export default DefaultScreenLayout;
