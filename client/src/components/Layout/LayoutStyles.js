import styled from "styled-components";

export const NavBarWrapper = styled.div`
	display: flex;
	height: 80px;
	align-items: center;
	justify-content: flex-end;
	background: white;
`;

export const AddWorkoutButton = styled.button`
	border: 1px solid #594eec;
	background: transparent;
	font-size: 1.4rem;
	color: #594eec;
	width: 130px;
	height: 40px;
	transition: 0.2s ease-in-out;
	border-radius: 5px;
	margin-left: 25px;
	cursor: pointer;
	outline: none;

	&:hover {
		background: #594eec;
		color: white;
	}
`;

export const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	img {
		border-radius: 50%;
		width: 50px;
		height: 50px;
		object-fit: cover;
		margin: 0 10px;
	}

	h1 {
		font-weight: 200;
		font-size: 1.6rem;
		margin-right: 25px;
		/* Review */

		span {
			font-weight: 600;
			color: #1e232d;
		}
	}
`;

export const DropDownWrapper = styled.div`
	position: absolute;
	top: 55px;
	right: 28px;

	&:last-child {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.logout {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
`;

export const ItemWrapper = styled.h2`
	padding: 10px 30px;
	transition: 0.2s ease-in-out;
	font-size: 1.4rem;
	font-weight: 200;
	box-shadow: 0px 20px 35px -16px rgba(0, 0, 0, 0.72);
	background: white;

	&:hover {
		background-color: #594eec;
		color: white;
	}
`;
