import "../styles/header.css";

async function Header() {
    const response = await fetch(process.env.BASE_URL + "users/me")
    const body = await response.json();

    const firstName = body.firstName;
    const lastName = body.lastName;
    const avatar = body.portraitUrl;

    return (
        <nav className={"nav"}>
            <ul className={"nav__list"}>
                <li className={"nav__items"}>
                    <a className={"nav__link"}>
                        Rooms
                    </a>
                    <a className={"nav__link"}>
                        Reservationstesttestsetset
                    </a>
                    <a className={"nav__link"}>
                        a
                    </a>
                </li>


                <li className={"nav__user"}>
                    <p>{firstName + " " + lastName}</p>
                    <img
                        className={"portrait__user"}
                        src={avatar}
                        alt={"avatar"}
                    />
                </li>
            </ul>
        </nav>

    );
}

export default Header;