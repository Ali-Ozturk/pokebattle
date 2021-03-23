import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.cursor-pointer {
	cursor: pointer;
}

#sprite-image {
	height: 10vh;
	width: 10vw;
}

@keyframes play {
	100% {
		background-position: -480px;
	}
}

.versus-gif img {
	width: 10vh;
}

#container {
	width: 100%;
	height: 100%;
}

#battle-arena {
	background-image: url('images/arena.gif');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 50vh;
	width: 50vw;
	margin: auto;
	color: white;
	@media (max-width: 500px) {
		width: 100vw;
		height: 50vh;
	}
}

#fighter {
	height: 10vh;
	width: auto;
	margin-bottom: 1vh;
	margin-top: 1vh;
	@media (max-width: 500px) {
		width: 25vw;
	}
}

@media (max-width: 500px) {
	#action_bar {
		bottom: auto !important;
		height: 100%;
	}
}

`;
