import "./index.css";
import { UserInfo } from "./components/UserInfo.tsx";
import Avatar from "./assets/iconUser.jpg";
import { createRoot } from "react-dom/client";
import { Card } from "./components/Card.tsx";
import App from "./App.js";
import Exercicio01 from "./components/Exercicio01.tsx";
import { ContainerCenter } from './components/ContainerCenter.tsx'


const isLogado = false;
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <ContainerCenter
    >
      <Exercicio01 />

    </ContainerCenter>
    {/* <Card> */}
    {/* <UserInfo
        name="Willians"
        idade={37}
        email="williansferr@gmail.com"
        src={Avatar}
        />
        </Card> */}


  </>
);
