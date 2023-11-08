import "./user.css";
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h3 className="userTitle">Edit User</h3>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle"></span>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
};

export default User;
