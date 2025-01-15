import styled from 'styled-components'

function Dropdown() {
    return (
        <Drop> 
            Hello
        </Drop>
    )
}

export default Dropdown; 

const Drop = styled.div`

    display: none; 

    @media only screeen and (max-width: 780px) {
        position: relative, 
        top: 50px;
        width: 300px; 
        transform: translateX(045%); 

        background-color: blue;
        // border: blue; 
    }
`


