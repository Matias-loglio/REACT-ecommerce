import NavBar from "../components/NavBar";

export const Layout = ({ children }) => {
    return (
            <main>
                <NavBar />
                {children}
            </main>
    );
};