import React from 'react';
import uniQueID from 'react-html-id';
import User from './User';
import PageTitle from '../pageInfo/Title';

import OtherParent from '../parentToChildData/otherParent';
import Login from '../login/Login';
import UserForm from './userForm';
import './user-styles.css';

class Users extends React.Component {
  constructor(props) {
    super(props);
    uniQueID.enableUniqueIds(this);
    this.state = { isLoggedIn: false };
    this.state = {
      showUserForm: true,
      count: 0,
      users: [
        {
          id: this.nextUniqueId(),
          name: 'Upendra',
          age: 30,
        },
        {
          id: this.nextUniqueId(),
          name: 'Murali',
          age: 35,
        },
        {
          id: this.nextUniqueId(),
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
  addUser = () => {
    this.setState({
      showUserForm: false,
    });
  };
  insertUser = (userInfo) => {
    console.log(userInfo);
    // e.preventDefault();
    //const newUser = Object.assign(userInfo, this.state.users);
    userInfo.id=this.nextUniqueId();
    const newUser = [...this.state.users,userInfo];
    console.log('newUser ', newUser);
    this.setState({
      users: newUser,
      showUserForm: true,
    });
    console.log('State ', this.state);
  };
  deleteUser = (id) => {
    console.log('Deleted id ', id);
    let tempStateData = this.state.users.filter((user) => user.id != id);
    console.log('After ', tempStateData);
    this.setState({
      users: tempStateData,
    });
  };
  render() {
    const showUserForm = this.state.showUserForm;
    const isLoggedIn = !this.state.isLoggedIn;

    return (
      <div>
        <div className="users-info">
          <span>
            <PageTitle name={this.state.showUserForm} />
          </span>
          <span>
            <button onClick={this.addUser}>Add User</button>
          </span>
        </div>

        <ul>
          {showUserForm &&
            this.state.users.map((user) => {
              return (
                <li key={user.id}>
                  <User
                    deleteUser={this.deleteUser.bind(this, user.id)}
                    age={user.age}
                  >
                    {user.name}
                  </User>
                </li>
              );
            })}
        </ul>
        <div className="user-form-container">
          {!showUserForm && <UserForm getUserDetails={this.insertUser} />}
        </div>
      </div>
    );
  }
}

export default Users;
