import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { PureComponent } from 'react'
import Avatar from 'react-md/lib/Avatars'
import Button from 'react-md/lib/Buttons/Button'
import FontIcon from 'react-md/lib/FontIcons'
import ListItem from 'react-md/lib/Lists/ListItem'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import SelectField from 'react-md/lib/SelectFields'
import ABC from '../components/ABCView'
import XYZ from '../components/XYZView'
import SkyLight from 'react-skylight';

//const avatarSrc = 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png'
const avatarSrc = '/static/ibmlogo-grey-54x20.png'

class NavigationLink extends PureComponent {
  render() {
    const { href, as, children, ..._props } = this.props
    return <div {..._props} style={{padding: 0}}>
      <Link href={href} as={as}>
        <a className='md-list-tile md-list-tile--mini' style={{width: '100%', overflow: 'hidden'}}>
          {children}
        </a>
      </Link>
    </div>
  }
}

export default class Dashboard extends PureComponent {
  constructor() {
    super()
    this.state = {
      role: 'Telecommunications'
    }
  }
  
  render() {
    let skyLightContent = <ABC/>
    let xyztitle = "XYZ View"
    let abctitle = "ABC View"
    let skylightTitle = abctitle
    
    const closeButton = (
      <Button
        icon
        tooltipLabel='Close the interactive demo'
        tooltipDelay={150}
        tooltipPosition='left'
      >
        close
      </Button>
    )
       

    let navItems = [
      {
        roles: ['Telecommunications','XYZ','ABC'],
        component: <ListItem
          key='0'
          component={NavigationLink}
          href='/'
          leftIcon={<FontIcon>account_box</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Home'}
        />,
      },
      {
        roles: ['Telecommunications'],
        component: <ListItem
          key='1'
          component={NavigationLink}
          href='/inventory'
          leftIcon={<FontIcon>account_circle</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Inventory'}
        />,
      },
      {
        roles: ['Telecommunications'],
        component: <ListItem
          key='2'
          component={NavigationLink}
          href='/setupauth'
          leftIcon={<FontIcon>face</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Setup & Authenticate'}
        />,
      },
      {
        roles: ['Telecommunications','ABC'],
        component: <ListItem
          key='3'
          component={NavigationLink}
          leftIcon={<FontIcon>perm_identity</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'ABC View'}
          onClick={() => {
            skylightTitle = abctitle
            skyLightContent = <ABC/>
            this.refs.ViewPop.show()
            }
            }
        />
      },
      {
        roles: ['Telecommunications','XYZ'],
        component: <ListItem
          key='4'
          component={NavigationLink}
          leftIcon={<FontIcon>perm_identity</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'XYZ View'}
          onClick={() => {
            skylightTitle = xyztitle
            skyLightContent = <XYZ/>
            this.refs.ViewPop.show()
            
            }}
        />,
      },
      
      {
        roles: ['Telecommunications'],
        component: <ListItem
          key='5'
          component={NavigationLink}
          href='/adduser'
          leftIcon={<FontIcon>record_voice_over</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Add User'}
        />,
      },
    ]
    

    return <div>
      <SkyLight dialogStyles = {{backgroundColor:'#FFFFFF',width:'95%',height:'500px',left: '28%', top:'50%',zIndex:999, position:'fixed'}} hideOnOverlayClicked ref="ViewPop" title={skylightTitle}>
        {skyLightContent}
      </SkyLight>
      <Head>
        <link rel='stylesheet' href='/static/react-md.min.css' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
        <script src='https://api.mapbox.com/mapbox-gl-js/v0.33.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.33.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <NavigationDrawer
        navItems={navItems.filter(navItem => {
          let result = false
          if(navItem.roles.indexOf(this.state.role) > -1) result = true
          return result
        }).map(navItem => navItem.component)}
        contentClassName='md-grid'
        drawerHeaderChildren={[
          /*
          <Avatar
            key={avatarSrc}
            src={avatarSrc}
            role='presentation'
            iconSized
            style={{alignSelf: 'center', marginLeft: 16, marginRight: 16, flexShrink: 0}}
          />,*/
          <SelectField
            id='account-switcher'
            defaultValue={this.state.role}
            menuItems={['Telecommunications','XYZ','ABC']}
            key='account-switcher'
            position={SelectField.Positions.BELOW}
            className='md-select-field--toolbar'
            onChange={val => {
              this.setState({role: val})
              Router.push('/')
            }}
          />
        ]}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        toolbarTitle='BC Telco Dashboard'
        toolbarActions={closeButton}
      >
        {this.props.children}
      </NavigationDrawer>
    </div>
  }
}
