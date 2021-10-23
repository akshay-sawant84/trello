import { v4 as uuidv4 } from "uuid";

const peopleApi = "https://swapi.dev/api/people/";

const planetApi = "https://swapi.dev/api/planets/";

let tasks = [
  { id: uuidv4(), title: "Helpdesk Call AA999", status: "todo" },
  { id: uuidv4(), title: "Helpdesk Call BB999", status: "todo" },
  { id: uuidv4(), title: "Helpdesk Call CC999", status: "development" },
  { id: uuidv4(), title: "Helpdesk Call EE999", status: "development" },
  { id: uuidv4(), title: "Helpdesk Call DD999", status: "testing" },
  { id: uuidv4(), title: "Helpdesk Call FF999", status: "testing" },
  { id: uuidv4(), title: "Helpdesk Call GG999", status: "done" },
];

let statusData = [
  { name: "todo", mapping: "To Do" },
  { name: "development", mapping: "Development" },
  { name: "testing", mapping: "Testing" },
  { name: "done", mapping: "Done" },
];

export { peopleApi, planetApi, tasks, statusData };
