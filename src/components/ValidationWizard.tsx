import bgImageSrcFilter from '@patternfly/patternfly/assets/images/background-filter.svg';
import bgImageSrcLg from '@patternfly/patternfly/assets/images/pfbg_1200.jpg';
import bgImageSrcXs from '@patternfly/patternfly/assets/images/pfbg_576.jpg';
import bgImageSrcXs2x from '@patternfly/patternfly/assets/images/pfbg_576@2x.jpg';
import bgImageSrcSm from '@patternfly/patternfly/assets/images/pfbg_768.jpg';
import bgImageSrcSm2x from '@patternfly/patternfly/assets/images/pfbg_768@2x.jpg';
import { BackgroundImageSrc, Button, Wizard } from '@patternfly/react-core';
import React from 'react';
import SampleFormOne from 'src/components//Steps/SampleFormOne';
import SampleFormTwo from 'src/components//Steps/SampleFormTwo';

interface IState {
  allStepsValid: boolean,
  formValueA: string,
  formValueB: string,
  isFormValidA: boolean,
  isFormValidB: boolean,
  isOpen: boolean,
}

class ValidationWizard extends React.Component<{}, IState>{
  constructor(props) {
    super(props);
    this.state = {
      allStepsValid: false,
      formValueA: 'Five',
      formValueB: 'Six',
      isFormValidA: false,
      isFormValidB: false,
      isOpen: false,
    };
  }


  public toggleOpen = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  public onFormChangeA = (isValid, value) => {
    this.setState(
      {
        formValueA: value,
        isFormValidA: isValid

      },
      this.areAllStepsValid
    );
  };

  public onFormChangeB = (isValid, value) => {
    this.setState(
      {
        formValueB: value,
        isFormValidB: isValid
      },
      this.areAllStepsValid
    );
  };

  public areAllStepsValid = () => {
    this.setState({
      allStepsValid: this.state.isFormValidA && this.state.isFormValidB
    });
  };

  public onNext = ({ id, name }, { prevId, prevName }) => {
    // tslint:disable-next-line:no-console
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    this.areAllStepsValid();
  };

  public onBack = ({ id, name }, { prevId, prevName }) => {
    // tslint:disable-next-line:no-console
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    this.areAllStepsValid();
  };

  public onGoToStep = ({ id, name }, { prevId, prevName }) => {
    // tslint:disable-next-line:no-console
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
  };

  public onSave = () => {
    // tslint:disable-next-line:no-console
    console.log('Saved and closed the wizard');
    this.setState({
      isOpen: false
    });
  };

  public render() {
    const { isOpen, isFormValidA, isFormValidB, formValueA, formValueB, allStepsValid } = this.state;

    const images = {
      [BackgroundImageSrc.lg]: bgImageSrcLg,
      [BackgroundImageSrc.sm]: bgImageSrcSm,
      [BackgroundImageSrc.sm2x]: bgImageSrcSm2x,
      [BackgroundImageSrc.xs]: bgImageSrcXs,
      [BackgroundImageSrc.xs2x]: bgImageSrcXs2x,
      [BackgroundImageSrc.filter]: bgImageSrcFilter + "#image_overlay"
    };

    const steps = [
      { id: 1, name: 'Information', component: <p>Step 1</p> },
      {
        name: 'Configuration',
        steps: [
          {
            id: 2,
            name: 'Substep A with validation',
            // tslint:disable-next-line:object-literal-sort-keys
            component: (
              <SampleFormOne formValue={formValueA} isFormValid={isFormValidA} onChange={this.onFormChangeA} />
            ),
            enableNext: isFormValidA
          },
          {
            id: 3,
            name: 'Substep B with validation',
            // tslint:disable-next-line:object-literal-sort-keys
            component: (
              <SampleFormTwo formValue={formValueB} isFormValid={isFormValidB} onChange={this.onFormChangeB} />
            ),
            enableNext: isFormValidB
          },
          { id: 4, name: 'Substep C', component: <p>Substep C</p> }
        ]
      },
      { id: 5, name: 'Additional', component: <p>Step 3</p>, enableNext: allStepsValid },
      { id: 6, name: 'Review', component: <p>Step 4</p> }
    ];

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.toggleOpen}>
          Show Wizard
        </Button>
        {isOpen && (
          <Wizard
            isOpen={isOpen}
            title="Validation Wizard"
            description="Validation Wizard Description"
            onClose={this.toggleOpen}
            onSave={this.onSave}
            steps={steps}
            onNext={this.onNext}
            onBack={this.onBack}
            onGoToStep={this.onGoToStep}
            footerRightAlign={true}
            backgroundImgSrc={images}
            className="pf-m-full-width pf-m-full-height"
          />
        )}
      </React.Fragment>
    );
  }
}

export default ValidationWizard;