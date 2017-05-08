import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { PureComponent } from 'react'
import { inject, observer } from 'mobx-react'
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

@inject('store') @observer
export default class Dashboard extends PureComponent {
 
   skyLightContent
   xyztitle
   abctitle
   skylightTitle

  constructor() {
    super()
    this.state = {
      role: 'Telecommunications'
    }
      this.skyLightContent = <ABC/>
      this.xyztitle = "XYZ View"
      this.abctitle = "ABC View"
      this.skylightTitle = this.abctitle
  }
  
  render() {
   /* let skyLightContent = <ABC/>
    let xyztitle = "XYZ View"
    let abctitle = "ABC View"
    let skylightTitle = abctitle */
    
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
        roles: ['Telecommunications'],
        component: <ListItem
          key='1'
          component={NavigationLink}
          href='#'
          onClick={this.props.store.inventory}
          leftIcon={<FontIcon>account_circle</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Inventory'}
        />,
      },
      {
        roles: ['Telecommunications','ABC'],
        component: <ListItem
          key='6'
          component={NavigationLink}
          leftIcon={<FontIcon>perm_identity</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'ABC View'}
          onClick={() => {
            this.refs.ViewPop.show()
            }
            }
        />
      },
      {
        roles: ['Telecommunications','XYZ'],
        component: <ListItem
          key='7'
          component={NavigationLink}
          leftIcon={<FontIcon>perm_identity</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'XYZ View'}
          onClick={() => {
            this.refs.ViewPop2.show()
            
            }}
        />,
      },
      {
        roles: ['Telecommunications'],
        component: <ListItem
          key='9'
          component={NavigationLink}
          href='#'
          onClick={this.props.store.resetInventory}
          leftIcon={<FontIcon>account_circle</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Reset Inventory'}
        />,
      }
    ]
    

    return <div>
      <SkyLight dialogStyles = {{backgroundColor:'#FFFFFF',width:'95%',height:'500px',left: '28%', top:'50%',zIndex:999, position:'fixed',opacity: '0.93'}} hideOnOverlayClicked ref="ViewPop" title={this.abctitle}>
        {<ABC/>}
      </SkyLight>
      <SkyLight dialogStyles = {{backgroundColor:'#FFFFFF',width:'95%',height:'500px',left: '28%', top:'50%',zIndex:999, position:'fixed',opacity: '0.93'}} hideOnOverlayClicked ref="ViewPop2" title={this.xyztitle}>
        {<XYZ/>}
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
        toolbarTitle='Blockchain for Telco Dashboard'
      >
        {this.props.children}
      </NavigationDrawer>
    </div>
  }
}
