import CartWidgets from "./CartWidgets";

const NavBar = (greeting) => {
    return (
    <div>
        <p>{greeting}</p>
        <CartWidgets />
    </div>
    );
};

export default NavBar;