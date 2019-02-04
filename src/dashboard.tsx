import bgImageSrcFilter from '@patternfly/patternfly/assets/images/background-filter.svg';
import avatarImg from '@patternfly/patternfly/assets/images/img_avatar.svg';
import brandImg from '@patternfly/patternfly/assets/images/l_pf-reverse-164x11.png';
import bgImageSrcLg from '@patternfly/patternfly/assets/images/pfbg_1200.jpg';
import bgImageSrcXs from '@patternfly/patternfly/assets/images/pfbg_576.jpg';
import bgImageSrcXs2x from '@patternfly/patternfly/assets/images/pfbg_576@2x.jpg';
import bgImageSrcSm from '@patternfly/patternfly/assets/images/pfbg_768.jpg';
import bgImageSrcSm2x from '@patternfly/patternfly/assets/images/pfbg_768@2x.jpg';
import '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { Avatar, BackgroundImage, BackgroundImageSrc, Brand, Button, ButtonVariant, Dropdown, DropdownItem, DropdownSeparator, DropdownToggle, KebabToggle, Nav, NavItem, NavList, Page, PageHeader, PageSection, PageSectionVariants, PageSidebar, Text, TextContent, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens';
import * as React from 'react';

interface IState {
  activeItem: number;
  isDropdownOpen: boolean;
  isKebabDropdownOpen: boolean;
  isNavOpen: boolean;
}

class Dashboard extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    // Set initial isNavOpen state based on window width
    const isNavOpen = typeof window !== 'undefined' && window.innerWidth >= parseInt(breakpointMd.value, 10);
    this.state = {
      activeItem: 0,
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isNavOpen
    };
  }

  public onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  public onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  public onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  public onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  public onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  public onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  public render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem, isNavOpen } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} onToggle={this.onNavToggle} aria-label="Nav">
        <NavList>
          <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
            メニュー1
          </NavItem>
          <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
            メニュー2
          </NavItem>
          <NavItem to="#nav-link3" itemId={2} isActive={activeItem === 2}>
            メニュー3
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem key="notifications">
        <BellIcon /> 通知
      </DropdownItem>,
      <DropdownItem key="settings">
        <CogIcon /> 設定
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem key="action1">アクション1</DropdownItem>,
      <DropdownItem key="action2">アクション2</DropdownItem>,
      <DropdownItem key="action3" isDisabled={true}>アクション3</DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="logout">ログアウト</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className="pf-u-sr-only pf-u-visible-on-lg">
          <ToolbarItem>
            <Button id="default-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="default-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className="pf-u-hidden-on-lg pf-u-mr-0">
            <Dropdown
              className="pf-m-plain"
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className="pf-u-sr-only pf-u-visible-on-md">
            <Dropdown
              className="pf-m-plain"
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>ユーザ1</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
    const bgImages = {
      [BackgroundImageSrc.lg]: bgImageSrcLg,
      [BackgroundImageSrc.sm]: bgImageSrcSm,
      [BackgroundImageSrc.sm2x]: bgImageSrcSm2x,
      [BackgroundImageSrc.xs]: bgImageSrcXs,
      [BackgroundImageSrc.xs2x]: bgImageSrcXs2x,
      [BackgroundImageSrc.filter]: bgImageSrcFilter + "#image_overlay"
    };

    const Header = (
      <PageHeader
        logo={<Brand src={brandImg} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={avatarImg} alt="Avatar image" />}
        showNavToggle={true}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isNavOpen} />;

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages} />
        <Page header={Header} sidebar={Sidebar}>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Hello World!</Text>
              <Text component="p">
                PatternFly 4 + Reactのサンプルアプリケーションです。
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Button variant="primary">Hello</Button>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default Dashboard;