import Header from "../containers/Header";

const BaseLayout = ({ children }) => {

  return (
    <>
      <Header />
      { children }
      <footer>
        <p>En construccion</p>
      </footer>
    </>
  );
};

export default BaseLayout;