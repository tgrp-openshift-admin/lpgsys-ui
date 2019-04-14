import avatarImg from '@patternfly/patternfly/assets/images/img_avatar.svg';
import brandImg from '@patternfly/patternfly/assets/images/l_pf-reverse-164x11.png';
import '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { Avatar, Brand, Breadcrumb, BreadcrumbItem, Button, ButtonVariant, Dropdown, DropdownItem, DropdownSeparator, DropdownToggle, KebabToggle, Nav, NavItem, NavList, Page, PageHeader, PageSection, PageSectionVariants, PageSidebar, Text, TextContent, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LpgsysBackgroundImage from 'src/components/BackgroundImage'
import ValidationWizard from "./ValidationWizard";

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

  public onDropdownSelect = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  public onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  public onKebabDropdownSelect = () => {
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
            <Link to="/">ログイン画面</Link>
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
              isPlain={true}
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className="pf-u-sr-only pf-u-visible-on-md">
            <Dropdown
              isPlain={true}
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>user1</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

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
        <LpgsysBackgroundImage />
        <Page header={Header} sidebar={Sidebar} >
          <PageSection variant={PageSectionVariants.light}>
            <Breadcrumb>
              <BreadcrumbItem to="#">Section Home</BreadcrumbItem>
              <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
              <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive={true}>
                Section Landing
          </BreadcrumbItem>
            </Breadcrumb>
          </PageSection>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">新設獲得業務</Text>
              <Text component="p">
                営業向けの新設獲得業務を開始します
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <ValidationWizard />
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default Dashboard;