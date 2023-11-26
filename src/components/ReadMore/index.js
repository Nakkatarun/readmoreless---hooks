// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Paragraph,
  Image,
  ImageAndDescriptionContainer,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [status, setStatus] = useState(false)
  const {reactHooksDescription} = props
  console.log(status)
  const onClickButton = () => {
    setStatus(prevState => !prevState)
  }

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <ImageAndDescriptionContainer>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {status ? (
          <Description>{reactHooksDescription}</Description>
        ) : (
          <Description>{reactHooksDescription.slice(0, 171)}</Description>
        )}
        {status ? (
          <Button type="button" onClick={onClickButton}>
            Read less
          </Button>
        ) : (
          <Button type="button" onClick={onClickButton}>
            Read more
          </Button>
        )}
      </ImageAndDescriptionContainer>
    </MainContainer>
  )
}

export default ReadMore
