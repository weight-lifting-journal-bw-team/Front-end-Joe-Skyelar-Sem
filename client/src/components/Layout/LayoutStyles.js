import styled from 'styled-components';

export const NavBarWrapper = styled.div`
    display: flex;
    height: 80px;
    border: 1px solid black;
    align-items: center;
    justify-content: flex-end;
`

export const AddWorkoutButton = styled.button`
    border: 1px solid #594EEC;
    background: transparent;
    font-size: 1.4rem;
    color: #594EEC;
    width: 130px;
    height: 40px;
    transition: 0.2s ease-in-out;
    border-radius: 10px;
    margin-left: 25px; 
    /* Review */

    &:hover {
        background: #594EEC;
        color: white;
    }
`

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
        /* Review */
    }

    h1 {
        font-weight: 200;
        font-size: 1.6rem;
        margin-right: 25px;
        /* Review */
        
        span {
            font-weight: 600;
            color: #1e232d
        }
    }
`

export const DropDownWrapper = styled.div`
    position: absolute;
    border: 1px dotted black;
    border-radius: 5px;
    top: 55px;
    right: 55px;
    /* Review */
`