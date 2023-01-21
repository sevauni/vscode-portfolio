import React, { Component } from 'react';
import './SideBar.scss'

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

    }


    rebuildSideBarIcons() {
        return this.iconsSet.map(item => {
            const buttonClass = item === this.state.selectedMenuItem
                ? `${item}  sidebar-icons sidebar-icon-selected`
                : `${item}  sidebar-icons`;

            return (
                <span
                    onClick={this.onChangeSelect}
                    key={item}
                    className={buttonClass} >
                </span >
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