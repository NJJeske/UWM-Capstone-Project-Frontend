import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

class TimelinePage extends Component {
    render() {
        return <Container fluid={true} id='TIMELINE_PAGE' />;
    }
}

export default connect()(TimelinePage);
