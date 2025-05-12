import { UserName } from "./UserName.tsx";
import { UserAvatar } from "./UserAvatar.tsx";
import { UserEmail } from "./UserEmail.tsx";
import { UserAge } from "./UserAge.tsx";
import { Button } from './Button.tsx';
import styled from "styled-components";

type Props = {
  name: string;
  idade: number;
  email: string;
  src: string;
};
export const UserInfo = (props: Props) => {



const pressButton = () => alert('Botão Pressionado!')

  return (
    <div className={styleUserInfo}>
      <h1>Meu Primeiro Componente</h1>
      <h3>
        <UserAvatar src={props.src} />
      </h3>
      <h3>
        Nome: <UserName name={props.name} />
      </h3>
      <h3>
        Idade: <UserAge idade={props.idade} />
      </h3>
      <h3>
        Email: <UserEmail email={props.email} />

      </h3>

      <>
        <Button label="Test" onClick={pressButton} />
      </>

    </div>
  );
};

const styleUserInfo = styled(UserInfo)`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  background: #f1a8a8;
  background-color: #f1a8a8;
`;
