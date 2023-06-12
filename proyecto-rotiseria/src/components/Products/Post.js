import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Post = ({ btnName, func, img}) => {
  return (
    <Col>
    <Card>
        <Card.Img variant='top' src={img} style={{width: '18rem'}}/>
        <Card.Body>
            <Button variant='primary' onClick={func}>{btnName}</Button>
        </Card.Body>
    </Card>
    </Col>
  )
}

export default Post