import styled from 'styled-components';

export const WorkoutInput = styled.input`
    font-size: 14px;
    background: #f5f5f5;
    border-radius: 10px;
    border: none;
    width: 300px;
    height: 50px;
    padding: 0 15px;
    outline: none;

    &::placeholder {
        font-size: 1.6rem;
        font-weight: normal;
        color:  #D8D8D8;
    }
`;

export const AddExerciseButton = styled.button`
    width: 130px;
    height: 45px;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    transition: 0.2s ease-in-out;
    
    &:hover {
        background: #594eec;
        color: white;
    }
`