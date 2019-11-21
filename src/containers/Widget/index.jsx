import React, { PureComponent } from 'react';
import { Form, withFormik } from 'formik';

import PropTypes from 'prop-types';
import { ReactComponent as Location } from '<assets>/location.svg';
import { ReactComponent as AirPlane } from '<assets>/airplane.svg';
import { Input, DateInput, Button } from '<components>';
import airports from '<assets>/airports.json';

import { Wrapper, WidgetComponent, FormContainer, FormRow, FormColumn } from './style';

class Widget extends PureComponent {
    state = {
        tripType: 0
    };

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    render() {
        const { handleSubmit } = this.props;
        const { tripType } = this.state;
        return (
            <Wrapper>
                <WidgetComponent>
                    <Form onSubmit={handleSubmit}>
                        <FormContainer>
                            <div>
                                <FormRow>
                                    <FormColumn>
                                        <Input
                                            type="search"
                                            name="originLocation"
                                            placeholder="Your Location"
                                            prefix={<Location />}
                                            dropdownChildren={airports}
                                        />
                                    </FormColumn>
                                    <FormColumn>
                                        <Input
                                            type="search"
                                            name="destinationLocation"
                                            placeholder="Your Destination"
                                            prefix={<AirPlane />}
                                            dropdownChildren={(
                                                <div style={{ padding: '18px' }}>
                                                    Please Enter Airport Information
                                                </div>
                                            )}
                                        />
                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn noMarg>
                                        <DateInput hasReturn={tripType !== 1} />
                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn>
                                        <Button size="large" fullWidth>
                                            Find
                                        </Button>
                                    </FormColumn>
                                </FormRow>
                            </div>
                        </FormContainer>
                    </Form>
                </WidgetComponent>
            </Wrapper>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        originLocation: '',
        destinationLocation: '',
        departureDate: new Date(),
        returnDate: null,
        numberPassegners: 1
    }),
    displayName: 'WidgetForm ',
    handleSubmit: (values, { resetForm, props }) => {
        console.log(values, props);
        resetForm();
    }
})(Widget);
