// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
`

export const ResultContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'roboto';
  font-size: 35px;
`
export const Label = styled.label`
    color: #7e858e;
    font-family: 'roboto';
    font-size: 15px;
    margin-bottom: 10px;
`
export const Input = styled.input`
    height: 40px;
    border: 1px solid #7e858e;
    border-radius: 5px;
    color: #1e293b;
    font-family: 'roboto';
    padding: 0px 10px;
    margin-bottom: 10px;
    outline: none;
`
export const Selection = styled.select`
  height: 40px;
    border: 1px solid #7e858e;
    border-radius: 5px;
    color: #1e293b;
    font-family: 'roboto';
    padding: 0px 10px;
    margin-bottom: 10px;
    outline: none;
`
export const Para = styled.p`
  color: #ffffff;
  font-family: 'roboto';
  font-size: ${props => props.size}px;
`
export const Button = styled.button`
  background-color: #0b69ff;
  height: 35px;
  width: 100px;
  color: #fff;
  font-family: 'roboto';
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`
