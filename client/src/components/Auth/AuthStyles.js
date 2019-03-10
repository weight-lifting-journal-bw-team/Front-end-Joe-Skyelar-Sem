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

export const AuthInput = styled.input`
	width: 300px;
	height: 50px;
	background: #f5f5f5;
	border-radius: 10px;
	border: none;
	margin: 5px 0;
	padding: 0 15px;

	&::placeholder {
		color: #d8d8d8;
	}
`;

export const AuthButton = styled.button`
	width: 180px;
	height: 50px;
	line-height: 50px;
	background: #594eec;
	border-radius: 50px;
	border: none;
	color: #ffffff;
	font-weight: bold;
	margin-top: 25px;
`;

export const AuthHelper = styled.p`
	font-size: 12px;
	color: #cbcbcb;
	padding: 60px 0 10px;
`;
