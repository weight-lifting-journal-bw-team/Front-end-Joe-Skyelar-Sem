import styled from "styled-components";

export const FormWrapper = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FormInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const FormInputLabel = styled.label`
	font-size: 1.4rem;
	font-weight: 300;
	margin-left: 5px;
`;

export const FormInput = styled.input`
	font-size: 14px;
	background: #f5f5f5;
	border-radius: 10px;
	border: none;
	width: 300px;
	height: 50px;
	padding: 0 15px;
	margin: 10px 0;
	outline: none;

	&::placeholder {
		font-size: 1.6rem;
		font-weight: normal;
		color: #d8d8d8;
	}
`;

export const FormButton = styled.button`
	width: 130px;
	height: 45px;
	font-size: 1.6rem;
	font-weight: 500;
	border-radius: 10px;
	border: 1px solid #594eec;
	color: #594eec;
	background: transparent;
	transition: 0.2s ease-in-out;
	cursor: pointer;
	margin: 20px 0;

	&:hover {
		background: #594eec;
		color: white;
	}
`;

export const FormTitle = styled.h1`
	font-size: 3rem;
	color: black;
	font-weight: normal;
	margin: 25px 0;
`;
