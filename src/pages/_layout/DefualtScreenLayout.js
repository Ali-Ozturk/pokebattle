import React, {Component} from 'react';

class DefaultScreenLayout extends Component {
    render() {
        return (
            <div className={'text-center ' + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default DefaultScreenLayout;
