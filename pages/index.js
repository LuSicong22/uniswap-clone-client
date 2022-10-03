import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Main from "../components/Main";

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
};

const Home = () => {
  return (
    <div className={style.wrapper}>
      <p>Uniswap V2 Clone</p>
      <Header />
      <Main />
      <h2>@Simon Lu</h2>
    </div>
  );
};

export default Home;
