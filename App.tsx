import React from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <KanbanBoard />
    </>
  );
};

export default App;
