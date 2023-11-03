const Greetings = ({ isLogin,name,img }) => {
  return (
<>
    {isLogin ?  <h1>Welcome Back {name}</h1> : <h1>Please Login</h1>}
 </>

  );

};

export default Greetings; 