import { bindActionCreators } from "redux";

export const pages = [
  {
    url: "/home",
    name: "home",
    title: "Home",
  },
  {
    url: "/rechnen",
    name: "rechnen",
    title: "Rechnen",
  },
  {
    url: "/clonen",
    name: "clonen",
    title: "Clonen",
  },
  {
    url: "/doppeln",
    name: "doppeln",
    title: "Doppeln",
  },
  {
    url: "/buttons",
    name: "buttons",
    title: "Buttons",
  },
  {
    url: "/temperature",
    name: "temperature",
    title: "Temperature",
  },
];

const addPage = (name = "default") => {
  name = name.toLowerCase();

  let obj = {
    url: "",
    name: "",
    title: "",
  };

  obj.name = name;
  obj.url = "/" + name;
  obj.title = name[0].toUpperCase() + name.slice(1);

  pages.push(obj);
};

// addPage("books");
