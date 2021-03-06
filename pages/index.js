import Head from "next/head";
import Navbar from "../Components/Header/Navbar";
import Board from "../Components/Board/Board";
import AutoComplete from "../Components/AutoComplete/AutoComplete";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trello Kanban Board</title>
      </Head>
      <Navbar />
      <Board />
      <AutoComplete />
    </>
  );
}
