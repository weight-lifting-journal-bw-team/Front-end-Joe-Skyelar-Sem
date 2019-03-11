import React from "react";

import styled from "styled-components";

const Loader = styled.span`
	@keyframes bouncing-loader {
		to {
			opacity: 0.1;
			transform: translate3d(0, -10px, 0);
		}
	}

	& {
		display: flex;
		justify-content: center;
	}

	& > span {
		width: 8px;
		height: 8px;
		margin: 22px 3px;
		background: #fff;
		border-radius: 50%;
		animation: bouncing-loader 0.6s infinite alternate;
	}
	& > span:nth-child(2) {
		animation-delay: 0.2s;
	}
	& > span:nth-child(3) {
		animation-delay: 0.4s;
	}
`;

export default () => {
	return (
		<Loader>
			<span />
			<span />
			<span />
		</Loader>
	);
};
