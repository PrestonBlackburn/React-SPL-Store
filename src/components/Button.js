import styled from 'styled-components'


export const CheckoutButton = styled.button`
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainGrey);
color: var(--mainGrey);
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

