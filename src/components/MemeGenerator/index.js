import {Component} from 'react'
import {
  Container,
  InputContainer,
  ResultContainer,
  Heading,
  Label,
  Input,
  Selection,
  Para,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    imageUrl: '',
    fontSize: '',
    isGenerate: false,
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onGenerate = event => {
    event.preventDefault()
    this.setState({isGenerate: true})
  }

  render() {
    const {fontSize, imageUrl, topText, bottomText, isGenerate} = this.state
    console.log(`${fontSize} ${imageUrl} ${topText} ${bottomText}`)
    return (
      <Container data-testid="meme">
        <InputContainer onSubmit={this.onGenerate}>
          <Heading>Meme Generator</Heading>
          <Label>Image URL</Label>
          <Input
            placeholder="Enter the Image URL"
            onChange={this.onChangeImageUrl}
            value={imageUrl}
          />
          <Label>Top Text</Label>
          <Input
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
            value={topText}
          />
          <Label>Bottom Text</Label>
          <Input
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
            value={bottomText}
          />
          <Label>Font Size</Label>
          <Selection onChange={this.onChangeFontSize} value={fontSize}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </Selection>
          <Button type="submit">Generate</Button>
        </InputContainer>
        {isGenerate && (
          <ResultContainer data-testid="meme" bgImage={imageUrl}>
            <Para size={fontSize}>{topText}</Para>
            <Para size={fontSize}>{bottomText}</Para>
          </ResultContainer>
        )}
      </Container>
    )
  }
}

export default MemeGenerator
