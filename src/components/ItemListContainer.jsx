import Container from "react-bootstrap/Container";

export const ItemListContainer = (props) => {
    return (

    <Container className="mt-4">

        <h2>{props.greeting}</h2>

    </Container>



    );
}