// import Avatar from "../assets/iconUser.jpg";
import styled from "styled-components";

type Props = {
    roles: {id: number, title: string}

}

export const UserRoles = (roles : Props) => {
    return(
        <ul className={styleUserRoles}>
            {/* {roles.map((value, key) => (
                <li key={key}>
                    {value.title}
                </li>
            )) */}
        {/* } */}
            
        </ul>
    )
}

const styleUserRoles = styled(UserRoles)`
    display: flex;
    background: #e9abab;
    flex-direction: column; 
    `