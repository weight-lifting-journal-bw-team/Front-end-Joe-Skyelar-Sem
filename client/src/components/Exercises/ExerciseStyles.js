import styled from "styled-components";

export const TableWrapper = styled.table`
	text-align: center;
	width: 100%;
`;

export const TableRowWrapper = styled.tr`
	&:nth-child(even):not(:last-child) {
		background-color: #f5f5f5;
	}
`;
export const TableHeaderWrapper = styled.th`
	font-size: 14px;
	font-weight: bold;
	padding: 10px 0;
`;

export const TableDataWrapper = styled.td`
	padding: 10px 0;
	font-size: 16px;
`;

export const InlineInput = styled.input`
	width: 140px;
	border-radius: 5px;
	border: none;
	padding: 0 10px;
	height: 40px;
	background: #f5f5f5;
	margin: 10px;
`;

export const InlineButon = styled.button`
	border: none;
	border-radius: 5px;
	background: #594eec;
	color: white;
	width: 100px;
	height: 40px;
	font-size: 12px;
`;
