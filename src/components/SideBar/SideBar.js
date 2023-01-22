import React, { Component } from 'react';


import './SideBar.scss'


//import mui
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';

//custom styles for tips
const CustomTip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: theme.typography.pxToRem(14),
        letterSpacing: '0.1rem'
    },
}));




class SideBar extends Component {

    state = {
        selectedMenuItem: 'icon-code'
    }

    iconsSet = [
        'icon-code',
        'icon-folder',
        'icon-contacts',
        'icon-github',
        'icon-linkedin',
        ' ',
        'icon-refresh'
    ];

    iconsSetDescription = [
        'Main Page',
        'My Projects',
        'Contacts',
        'Github  Page',
        'LinkedIn  Profile',
        ' ',
        'Refresh this page'
    ];

    onChangeSelect = (key) => {
        const value = key.target.className.split(" ", 1)[0];
        const { selectedMenuItem } = this.state;
        if (value === selectedMenuItem) return;
        if (value === 'icon-refresh') {
            //reset page
            //window.open('http://ya.ru');
            window.location.reload(true);
            return;
        }
        if (value === 'icon-github') {
            window.open('https://github.com/sevauni');
            return;
        }
        if (value === 'icon-linkedin') {
            window.open('https://www.linkedin.com/in/vsevolod-usyskin-354872253/');
            return;
        }


        this.setState({
            selectedMenuItem: value
        });
        this.props.onMenuChange(value);
    }

    rebuildSideBarIcons() {
        return this.iconsSet.map((item, index) => {
            const buttonClass = item === this.state.selectedMenuItem
                ? `${item}  sidebar-icons sidebar-icon-selected`
                : `${item}  sidebar-icons`;

            return (
                <CustomTip
                    title={this.iconsSetDescription[index]}
                    arrow placement="right"
                    TransitionComponent={Zoom}
                    key={'decr' + item}
                >
                    <span
                        onClick={this.onChangeSelect}
                        key={item}
                        className={buttonClass} >
                    </span >
                </CustomTip>

            )
        }
        );


    }

    render() {

        const buttons = this.rebuildSideBarIcons();

        return (
            <div className="sidebar sidebar-icons-container">
                {buttons}
            </div>
        );
    }
}

export default SideBar;