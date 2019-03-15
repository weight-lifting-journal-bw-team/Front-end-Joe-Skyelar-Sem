import styled from "styled-components";

export const HomeBodyWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	padding-top: 75px;
`;

export const StatsBarWrapper = styled.div`
	margin-top: 50px;
	width: 100%;
	padding: 0 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const StatsContainer = styled.div`
	background: linear-gradient(
		259.01deg,
		#db00ff 0%,
		#ad01ff 48.18%,
		#8600ff 98.41%
	);

	width: 23%;
	height: 129px;
	border-radius: 10px;
	padding-left: 10px;
	& > h3 {
		color: white;
		font-size: 1.6rem;
		font-weight: 300;
		margin: 25px 20px 10px;
	}

	& > h2 {
		color: white;
		font-size: 5rem;
		font-weight: 600;
		margin: 0 20px 20px;
	}
`;

export const StatsContainer2 = styled.div`
	background: linear-gradient(
		255.04deg,
		#5a82e8 0%,
		#3daee2 48.18%,
		#1ce1da 98.41%
	);

	width: 25%;
	height: 129px;
	border-radius: 10px;
	padding-left: 10px;

	& > h3 {
		color: white;
		font-size: 1.6rem;
		font-weight: 300;
		margin: 25px 20px 10px;
	}

	& > h2 {
		color: white;
		font-size: 5rem;
		font-weight: 600;
		margin: 0 20px 20px;
	}
`;

export const StatsContainer3 = styled.div`
	background: linear-gradient(
		253.13deg,
		#fe6308 0%,
		#f73c3a 48.18%,
		#ef116e 98.41%
	);

	width: 24%;
	height: 129px;
	border-radius: 10px;
	padding-left: 10px;

	& > h3 {
		color: white;
		font-size: 1.6rem;
		font-weight: 300;
		margin: 25px 20px 10px;
	}

	& > h2 {
		color: white;
		font-size: 5rem;
		font-weight: 600;
		margin: 0 20px 20px;
	}
`;

export const StatsContainer4 = styled.div`
	background: linear-gradient(
		254.72deg,
		#91c840 0%,
		#48bc6e 48.18%,
		#07b196 98.41%
	);
	width: 23%;
	height: 129px;
	border-radius: 10px;

	& > h3 {
		color: white;
		font-size: 1.6rem;
		font-weight: 600;
		margin: 25px 20px 10px;
		padding-left: 10px;
		font-weight: 300;
	}

	& > h2 {
		color: white;
		font-size: 5rem;
		font-weight: 600;
		margin: 0 20px 20px;
		padding-left: 10px;
	}
`;

export const ChartContainer = styled.div`
	border: 1px solid black;
	height: 500px;
	width: 800px;
`;
