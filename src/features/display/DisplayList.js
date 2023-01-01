import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { HOMEPAGECARDS } from "../../app/shared/HOMEPAGECARDS";

const selectAllCards = () => {
    //console.log(HOMEPAGECARDS)
    return HOMEPAGECARDS;
}

const DisplayList = () => {
    const items = [
        selectAllCards()
    ]
    console.log(items);
  return (
    <Row>
        {items.map((item, idx) => {
            return (
                item && (
                    <Col md className="m-1" key={idx}>test
                        <DisplayCard item={item}>Blue</DisplayCard>
                    </Col>
                )
            )
        })}
    </Row>
  )
}

export default DisplayList

