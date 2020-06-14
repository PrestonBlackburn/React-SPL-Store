import styled from 'styled-components'


export const ProdButton = styled.button`
font-size: 1.4rem;
background: var(--mainBlue);
border: 0.05rem solid var(--secondaryGrey);
background:${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
color: var(--secondaryGrey);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0.2rem;
transition:all 0.5s ease-in-out;
&:hover{
    background: var(--secondaryGrey);
    color: var(--mainGrey);
}
&:focus{
    outline:none;
}
`;
