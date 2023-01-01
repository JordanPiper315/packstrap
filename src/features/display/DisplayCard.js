import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// import { HOMEPAGECARDS } from '../../app/shared/HOMEPAGECARDS'

const DisplayCard = ({ item }) => {
    const { image, name } = item;
  return (
    <Card>
        <CardImg src={image} alt={name} />
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText></CardText>
        </CardBody>
    </Card>
  )
}

export default DisplayCard


