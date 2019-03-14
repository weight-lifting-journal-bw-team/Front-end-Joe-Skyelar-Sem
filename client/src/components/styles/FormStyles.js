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
	width: 150px;
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

export const FormTitle = styled.h1`
	font-size: 3rem;
	color: black;
	font-weight: normal;
	margin: 25px 0;
`;

export const UnderlineFormInput = styled.input`
	border: none;
	border-bottom: 1px solid black;
	padding: 5px 10px;
	outline: none;
`;

export const SolidRoundBtn = styled.button`
	width: 80px;
	height: 40px;
	border: none;
	border-radius: 5px;
	background: #594eec;
	color: white;
	font-size: 16px;
	margin: 0 4px;
	outline: none;
`;

export const RoundBtn = styled.button`
	width: 80px;
	height: 40px;
	border: none;
	border-radius: 5px;
	background: transparent;
	color: #594eec;
	border: 1px solid #594eec;
	font-size: 16px;
	margin: 0 4px;
	outline: none;
	transition: 0.2s ease-in-out;

	&:hover {
		color: white;
		background: #594eec;
	}
`;
