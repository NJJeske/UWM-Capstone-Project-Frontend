import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import TextArea from 'react-textarea-autosize';
import { Entity, ReferenceSelector } from '../';
import { alwaysTrue, lengthLessThan } from '../validators';

export const ProjectForm = props => {
    const { changeField, entityData, invalidFields, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        title,
        description,
        positionId,
        educationId,
        startDate,
        endDate,
    } = entityData;

    return (
        <Form>
            <Row form={true}>
                <Col xs='12' lg='9'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='title'
                            placeholder='Title'
                            disabled={disabled}
                            className={disabledClass}
                            value={title || ''}
                            valid={!invalidFields.title}
                            invalid={invalidFields.title}
                            onChange={changeField.bind(null, lengthLessThan.bind(null, 20))}
                            // above line is same as saying...
                            // onChange={event => changeField(arg => lengthLessThan(20, arg), event)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='12'>
                    <FormGroup disabled={disabled} >
                        <Input
                            tag={TextArea}
                            name='description'
                            placeholder='Description'
                            disabled={disabled}
                            className={disabledClass}
                            value={description || ''}
                            valid={!invalidFields.description}
                            invalid={invalidFields.description}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='2' className='formLabel'>
                    <Label>Position</Label>
                </Col>
                <Col xs='10'>
                    <ReferenceSelector
                        entityType='positions'
                        name='positionId'
                        selectedId={positionId}
                        disabled={disabled}
                        className={disabledClass}
                        onChange={changeField.bind(null, alwaysTrue)}
                    />
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='2' className='formLabel'>
                    <Label>Education</Label>
                </Col>
                <Col xs='10'>
                    <ReferenceSelector
                        entityType='education'
                        name='educationId'
                        selectedId={educationId}
                        disabled={disabled}
                        className={disabledClass}
                        onChange={changeField.bind(null, alwaysTrue)}
                    />
                </Col>
            </Row>
            <Row form={true}>
                <Col lg='6'>
                    <Row form={true}>
                        <Col xs='2' className='formLabel'>
                            <Label>Began</Label>
                        </Col>
                        <Col xs='10'>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="startDate"
                                    disabled={disabled}
                                    className={disabledClass}
                                    value={startDate || ''}
                                    valid={!invalidFields.startDate}
                                    invalid={invalidFields.startDate}
                                    onChange={changeField.bind(null, alwaysTrue)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
                <Col lg='6'>
                    <Row form={true}>
                        <Col xs='2' className='formLabel'>
                            <Label>End</Label>
                        </Col>
                        <Col xs='10'>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="endDate"
                                    disabled={disabled}
                                    className={disabledClass}
                                    value={endDate || ''}
                                    valid={!invalidFields.endDate}
                                    invalid={invalidFields.endDate}
                                    onChange={changeField.bind(null, alwaysTrue)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};

export default props => (
    <Entity entityType='projects' entityData={props}>
        <ProjectForm />
    </Entity>
);
