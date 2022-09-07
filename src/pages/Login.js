const Login = () => {
  return (
    <>
      <div className="welcome_text__wrapper mt-24">
        <h1 className="text-left font-bold text-6xl ml-20 pb-8 text-[#f1c40e]">
          Believe
          <br />
          Yourself
        </h1>
        <div className="flex items-center gap-6">
          <hr className="w-14 border-t-4 border-black" />
          <h2 className="text-black text-3xl font-bold">Train like a pro</h2>
        </div>
      </div>

      <div className="login__wrapper px-5 mt-16">
        <h2 className="font-bold text-xl"> Log in with your credentials</h2>
        <input className="border-2 outline-none p-4 mt-4 w-full rounded-full" type="text" placeholder="Enter your email..." name="uname" required></input>
        <input className="border-2 outline-none p-4 mt-4 w-full rounded-full" type="password" placeholder="Enter your password..." name="psw" required></input>
        <button className="border-2 border-transparent outline-none p-4 mt-4 w-full rounded-full uppercase font-semibold bg-[#f1c40e]">Log in</button>
      </div>
    </>
  );
};

export default Login;
