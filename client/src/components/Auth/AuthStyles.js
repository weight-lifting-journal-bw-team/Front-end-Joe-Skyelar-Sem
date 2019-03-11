import styled from "styled-components";

export const AuthContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const AuthWrapper = styled.div`
	text-align: center;
	width: 400px;
	background: #ffffff;
	box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	margin-top: 80px;
`;

export const AuthTitle = styled.h1`
	font-size: 24px;
	font-weight: bold;
	color: #1e232d;
	padding: 40px 0 30px;
`;

export const Errors = styled.p`
	font-size: 14px;
	color: #c82333;
	padding: 10px 0;
`;

export const AuthInput = styled.input`
	width: 300px;
	height: 50px;
	background: ${props => (props.errors ? "#F8D7DA" : " #f5f5f5")};
	border-radius: 10px;
	border: none;
	margin: 5px 0;
	padding: 0 15px;
	outline: none;

	&::placeholder {
		color: ${props => (props.errors ? "#c82333" : "#d8d8d8")};
	}

	border: 1px solid ${props => (props.errors ? "#c82333" : "transparent")};
`;

export const AuthButton = styled.button`
	width: 180px;
	height: 50px;
	background: #594eec;
	border-radius: 50px;
	border: none;
	color: #ffffff;
	font-weight: bold;
	margin-top: 25px;
	outline: none;

	&:disabled {
		background: #847cf1;
		color: e6e6e6;
	}
`;

export const AuthHelper = styled.p`
	font-size: 12px;
	color: #cbcbcb;
	padding: 60px 0 10px;

	& > a {
		font-size: 12px;
		color: #cbcbcb;
		text-decoration: underline;

		&:hover {
			color: #594eec;
		}
	}
`;
