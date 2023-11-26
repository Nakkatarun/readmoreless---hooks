// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 30px;
  margin: 0px;
`
export const Paragraph = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
`
export const Image = styled.img`
  width: 100%;
  height: 400px;
`
export const ImageAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
`
export const Description = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
`
export const Button = styled.button`
  background-color: #1f81ff;
  border: none;
  outline: none;
  padding: 10px;
  width: 100px;
  align-self: center;
  margin: 0px;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
`
