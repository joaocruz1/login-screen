import styled from 'styled-components'

export const InputCustom = styled.input`
  color: black;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid #929;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  padding: 16px 20px;
  width: 100%;
    input::placeholder {
      color: #FFF;
      font-size: 12px;
      opacity 0.7;
    }
`