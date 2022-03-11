import React from 'react';

import User from './User';
import PageTitle from '../pageInfo/Title';


import OtherParent from '../parentToChildData/otherParent';


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [
        {
          name: 'Upendra',
          age: 30,
        },
        {
          name: 'Murali',
          age: 35,
        },
        {
          name: 'Ravi',
          age: 40,
        },
      ],
      pageInfo: {
        title: 'Users list',
        pageNum: 1,
        pageElements: [1, 2, 3, 4],
      },
      userListPageTitle: 'Users List From State',
    };
  }
  checkValues = () => {
    console.log('Before ', this.state);
    let newPageInfo = this.state.pageInfo;
    let pageTitle, pageNum;

    if (typeof newPageInfo.title == 'string') {
      pageTitle = newPageInfo.title + ' Updated';
    }
    if (typeof newPageInfo.pageNum == 'number') {
      pageNum = newPageInfo.pageNum += 1;
    }
    if (typeof newPageInfo.pageElements == 'object') {
      newPageInfo.pageElements.push(5);
    }
    this.setState({
      pageInfo: {
        title: pageTitle,
        pageNum: pageNum,
        pageElements: newPageInfo.pageElements,
      },
    });
    setTimeout(this.callMe, 2000);
  };
  updateUsers = () => {
    let newUsers = this.state.users.map((user) => {
      let newUserInfo = user;
      newUserInfo.age += 5;
      return newUserInfo;
    });
    console.log('Before ', this.state);
    this.setState({ user: newUsers });
    this.callMe();
  };
  callMe = () => {
    console.log('Called-->');
    console.log('After ', this.state);
  };

  changePageTitleButtonClick = () => {
    this.setState({
      userListPageTitle: 'Users List - Button',
    });
  };
  changePageTitle = (value) => {
    this.setState({
      userListPageTitle: value,
    });
  };
  changePageNameInput = (e) => {
    console.log('Evtn ', e);
    this.setState({
      userListPageTitle: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div>
          <PageTitle name={this.state.userListPageTitle} />
        </div>
        <OtherParent />
        {/* <button onClick={this.changePageTitleButtonClick}>
          Change Page Title - butoon click
        </button>
        <br />
        <button onClick={this.changePageTitle.bind(this, 'Bind event')}>
          Change Page Title - butoon click - bind
        </button>
        <br />
        <br />
        <form>
          <input
            type="text"
            onChange={this.changePageNameInput}
            value={this.state.userListPageTitle}
            name="firstName"
          />
        </form>
        <br />
        <br />
        <button onClick={this.checkValues}>CheckpageInfo</button>
        <br />
        <br /> */}
        <button onClick={this.updateUsers}>UpdateUsers</button>
        <br />
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user.age}>
                <User age={user.age}>{user.name}</User>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
