import "./App.css";
import React from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Massoumeh",
      email: "massi@gmai.com",
    },
    {
      id: "2",
      name: "Ammar",
      email: "Ammar@gmai.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
