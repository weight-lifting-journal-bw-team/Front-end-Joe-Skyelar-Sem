import { css } from "styled-components";

export const Styles = css`
	@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i");

	* {
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%;
		background: #f4f7f6;
	}
	::selection {
		background-color: #594eec;
		color: white;
	}
	h1,
	h2,
	h3,
	h4,
	label,
	table {
		font-family: "Roboto", sans-serif;
	}
	p {
		font-family: "Roboto", sans-serif;
		font-size: 3rem;
		line-height: 1.8;
	}
	a {
		text-decoration: none;
		font-size: 2rem;
		font-family: "Roboto", sans-serif;
		color: black;
	}
	input,
	textarea,
	button {
		-webkit-appearance: none;
		font-family: "Roboto", sans-serif;
	}

	input {
		font-size: 16px;
	}
`;
