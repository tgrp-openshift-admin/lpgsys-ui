import bgImageSrcFilter from '@patternfly/patternfly/assets/images/background-filter.svg';
import bgImageSrcLg from '@patternfly/patternfly/assets/images/pfbg_1200.jpg';
import bgImageSrcXs from '@patternfly/patternfly/assets/images/pfbg_576.jpg';
import bgImageSrcXs2x from '@patternfly/patternfly/assets/images/pfbg_576@2x.jpg';
import bgImageSrcSm from '@patternfly/patternfly/assets/images/pfbg_768.jpg';
import bgImageSrcSm2x from '@patternfly/patternfly/assets/images/pfbg_768@2x.jpg';
import '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import '@patternfly/patternfly/utilities/Spacing/spacing.css';
import {
    BackgroundImage,
    BackgroundImageSrc,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    ListItem,
    LoginFooterItem,
    LoginForm,
    LoginPage
} from '@patternfly/react-core';
import * as React from 'react';
import './App.css';
import brandImg from './LPGSYS.svg';
/**
 * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
 */

const bgImages = {
    [BackgroundImageSrc.lg]: bgImageSrcLg,
    [BackgroundImageSrc.sm]: bgImageSrcSm,
    [BackgroundImageSrc.sm2x]: bgImageSrcSm2x,
    [BackgroundImageSrc.xs]: bgImageSrcXs,
    [BackgroundImageSrc.xs2x]: bgImageSrcXs2x,
    [BackgroundImageSrc.filter]: bgImageSrcFilter + "#image_overlay"
  };

interface IState {
  isDropDownOpen: boolean;
  isRememberMeChecked: boolean;
  passwordValue: string;
  usernameValue: string;
}

class LpgsysLoginPage extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownOpen: false,
      isRememberMeChecked: false,
      passwordValue: '',
      usernameValue: '',
    };
  }

  public render() {
    const isDropDownOpen  = this.state.isDropDownOpen;
    const dropdownItems = [
      <DropdownItem key="japanese">Japanese</DropdownItem>,
      <DropdownItem key="english">English</DropdownItem>
    ];
    const languageDropdown = (
      <Dropdown
        dropdownItems={dropdownItems}
        onSelect={this.onDropDownSelect}
        toggle={<DropdownToggle onToggle={this.onDropDownToggle}>Japanese</DropdownToggle>}
        isOpen={isDropDownOpen}
      />
    );

    const signUpMessage = (
      <React.Fragment>
        Need an account? <a href="https://www.patternfly.org">ユーザー申請</a>
      </React.Fragment>
    );

    const listItem = (
      <React.Fragment>
        <ListItem>
          <LoginFooterItem href="#">利用規約 </LoginFooterItem>
        </ListItem>
        <ListItem>
          <LoginFooterItem href="#">マニュアル </LoginFooterItem>
        </ListItem>
        <ListItem>
          <LoginFooterItem href="#">プライバシーポリシー </LoginFooterItem>
        </ListItem>
      </React.Fragment>
    );

    const loginForm = (
      <LoginForm
        usernameLabel="統合ID"
        usernameValue={this.state.usernameValue}
        onChangeUsername={this.handleUsernameChange}
        usernameHelperTextInvalid="統合IDが存在しません"
        isValidUsername={true}
        passwordLabel="パスワード"
        passwordValue={this.state.passwordValue}
        onChangePassword={this.handlePasswordChange}
        passwordHelperTextInvalid="パスワードが間違っています"
        isValidPassword={true}
        rememberMeLabel="30日間ログインしたままにする"
        isRememberMeChecked={this.state.isRememberMeChecked}
        onChangeRememberMe={this.onRememberMeClick}
        rememberMeAriaLabel="Remember me Checkbox"
      />
    );

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages} />
        <LoginPage
            footerListVariants="inline"
            brandImgSrc={brandImg}
            brandImgAlt="PatternFly logo"
            // backgroundImgSrc={"/assets/images/pfbg_1200.jpg"}
            backgroundImgAlt="Images"
            footerListItems={listItem}
            textContent="このシステムはTOKAI LPG基幹システムです。"
            loginTitle="統合IDでログインしましょう"
            signUpForAccountMessage={signUpMessage}
            languageSelector={languageDropdown}
        >
            {loginForm}
        </LoginPage>
      </React.Fragment>
    );
  }

  private onDropDownToggle = isOpen => {
    this.setState({
      isDropDownOpen: isOpen
    });
  };

  private onDropDownSelect = event => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    });
  };

  private handleUsernameChange = value => {
    this.setState({ usernameValue: value });
  };

  private handlePasswordChange = passwordValue => {
    this.setState({ passwordValue });
  };

  private onRememberMeClick = () => {
    this.setState({ isRememberMeChecked: !this.state.isRememberMeChecked });
  };
}

export default LpgsysLoginPage;