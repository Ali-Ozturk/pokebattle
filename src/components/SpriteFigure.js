import React, {Component} from 'react';

class SpriteFigure extends Component {
    render() {
        const {sprite} = this.props;

        return (
            <figure className={this.props.className} onClick={this.props.onClick}>
                <img className={this.props.onClick ? 'cursor-pointer' : ''} alt={sprite.label}
                     src={process.env.PUBLIC_URL + sprite.imageUrl}/>
                <figcaption>{sprite.label}</figcaption>
            </figure>
        );
    }
}

export default SpriteFigure;
