import styled from "styled-components";

export const WorkoutsListWrapper = styled.div`
	width: 850px;
	height: 500px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
`;

export const WorkoutWrapper = styled.div`
	width: 100%;
	border-radius: 10px;
	margin-bottom: 15px;
	background: #fff;
	box-shadow: 0px 0px 39px -20px rgba(0, 0, 0, 0.75);
`;

export const WorkoutContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70px;
`;

export const WorkoutContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0 25px;
	justify-content: space-between;
	margin-top: 5px;
`;

export const WorkoutRegionHeader = styled.div`
	align-items: center;
	display: flex;
	cursor: pointer;

	p {
		font-size: 1.6rem;
		padding: 0 5px;
	}
`;

export const DropDownWrapper = styled.div`
	width: 100%;
	height: 100%;
	border-top: 1px solid #f5f5f5;
`;

export const DeleteButton = styled.button`
	background: red;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	border: none;
	margin: 0 3px;
`;

export const EditButton = styled.button`
	background: #594eec;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	border: none;
	margin: 0 3px;
`;
