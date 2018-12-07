import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { fetchEntities, createLocalEntity } from '../../redux/actions/entityActions';
import { Header, Sidebar, Footer } from '../../components';
import './styles.scss';

const EntityPage = props => {
    const { title, entityType, entities, fetchEntities, createLocalEntity, auth, Component } = props;
    const alreadyCreating = entities.list.some(entity => entity._local);

    const mainBody = entities.error ? (
        <Row className='fetchError'>
            <h3>Error fetching data</h3>
            <Button onClick={fetchEntities.bind(null, entityType)}>Retry</Button>
        </Row>
    ) : (
        entities.list.map(entity => <Component key={entity.id} {...entity} />)
    );

    const createButton = alreadyCreating || entities.error ? null : (
        <Row className='entity'>
            <Col xs={{ size: 8, offset: 2 }} sm={{ size: 6, offset: 3 }}>
                <Button className={`${entityType} createButton`} onClick={createLocalEntity.bind(null, entityType)}>
                    Create
                </Button>
            </Col>
        </Row>
    );

    return (
        <Container fluid={true} id={`${entityType.toUpperCase()}_PAGE`}>
            <Sidebar />
            <Header title={title} auth={auth} />
            <main>
                {mainBody}
                {createButton}
            </main>
            <Footer />
        </Container>
    );
};

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    entities: state.data[ownProps.entityType],
});

const mapDispatchToProps = {
    fetchEntities,
    createLocalEntity,
};

export default connect(mapStateToProps, mapDispatchToProps)(EntityPage);
