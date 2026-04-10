import client_1 from "../../../assets/client-01.svg";
import client_2 from "../../../assets/client-02.svg";
import client_3 from "../../../assets/client-03.svg";
import client_4 from "../../../assets/client-04.svg";
import client_5 from "../../../assets/client-05.svg";
import client_6 from "../../../assets/client-06.svg";
import client_7 from "../../../assets/client-07.svg";

export interface Client {
  id: number;
  image: string;
  alt: string;
}

const clients: Client[] = [
  { id: 1, image: client_1, alt: "airbnb logo" },
  { id: 2, image: client_2, alt: "Cadbury logo" },
  { id: 3, image: client_3, alt: "HubSpot logo" },
  { id: 4, image: client_4, alt: "Amazon logo" },
  { id: 5, image: client_5, alt: "Canon logo" },
  { id: 6, image: client_6, alt: "Spark logo" },
  { id: 7, image: client_7, alt: "Quora logo" },
];

export default clients;
