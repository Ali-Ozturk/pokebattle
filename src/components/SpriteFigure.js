import React, {Component} from 'react';

class SpriteFigure extends Component {
    render() {
        const {sprite} = this.props;

        return (
            <figure className={this.props.className + ' ' + (this.props.cursor ? 'cursor-pointer' : '')} onClick={this.props.onClick}>
                <img src={sprite.imageUrl} id={'fighter'} alt={sprite.name}/>
                <figcaption>{sprite.label}</figcaption>
            </figure>
        );
    }
}

export default SpriteFigure;
