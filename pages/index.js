import Head from "next/head";
import Navbar from "../Components/Header/Navbar";
import Board from "../Components/Board/Board";



export default function Home() {
  return (
    <>
      <Navbar />
      <Board />
    </>
  );
}
