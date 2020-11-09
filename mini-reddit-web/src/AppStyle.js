import styled from 'styled-components'

const AppStyle = styled.div`
  padding: 1rem;
  background-color: ${props => props.darkMode ? 'black' : 'white'};
`

export default AppStyle
