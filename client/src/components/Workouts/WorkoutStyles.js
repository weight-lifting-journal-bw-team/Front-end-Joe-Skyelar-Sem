import styled from "styled-components";

export const WorkoutsListWrapper = styled.div`
	width: 800px;
	height: 500px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
`;

export const WorkoutWrapper = styled.div`
	width: 100%;
	border-radius: 10px;
	margin: 5px 0;
	background: #fff;
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
		padding-right: 15px;
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
