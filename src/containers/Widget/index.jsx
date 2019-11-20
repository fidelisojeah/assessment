import React, { PureComponent } from 'react';
import { Form, withFormik } from 'formik';

import PropTypes from 'prop-types';
import { ReactComponent as Location } from '<assets>/location.svg';
import { Input, DateInput } from '<components>';

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
                                {/* <FormFields> */}
                                <FormRow>
                                    <FormColumn>
                                        <Input
                                            type="search"
                                            name="origin"
                                            placeholder="Your Location"
                                            prefix={<Location />}
                                        />
                                    </FormColumn>
                                    <FormColumn>
                                        <Input
                                            type="search"
                                            name="destination"
                                            placeholder="Your Destination"
                                            prefix={<Location />}
                                        />
                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn>
                                        <DateInput hasReturn={tripType !== 1} />
                                    </FormColumn>
                                </FormRow>
                                {/* </FormFields> */}
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
        origin: '',
        destination: '',
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
