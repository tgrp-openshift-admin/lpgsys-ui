import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import React from 'react';

interface IProps {
    isFormValid: boolean,
    formValue: any,
    onChange: any
}

interface IState {
    isValid: boolean,
    value: any
}

class SampleFormOne extends React.Component<IProps, IState>{
    constructor(props) {
        super(props);
        this.state = {
            isValid: this.props.isFormValid,
            value: this.props.formValue
        };
    }
    public render() {
        const { value, isValid } = this.state;

        return (
            <Form>
                <FormGroup
                    label="Age:"
                    type="number"
                    helperText="Please write your age"
                    helperTextInvalid="Age has to be a number"
                    fieldId="age"
                    isValid={isValid}
                >
                    <TextInput
                        isValid={isValid}
                        value={value}
                        id="age"
                        aria-describedby="age-helper"
                        onChange={this.handleTextInputChange}
                    />
                </FormGroup>
            </Form>
        );
    }

    private handleTextInputChange = value => {
        const isValid = /^\d+$/.test(value);
        this.setState({ value, isValid, });
        this.props.onChange(isValid, value);
    };
}

export default SampleFormOne;