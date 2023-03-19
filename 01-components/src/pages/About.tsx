import Layout from '../components/Layout';

const About = () => {
  let currPage = window.location.pathname.slice(1);
  if (currPage === 'about') {
    currPage = 'About page'
  }
  return (
    <Layout currentPage={currPage}>
      <div className="about">
        <h2>About this tiny app</h2>
        <p className="about__content">
          This is a small database of the Pokémon universe. Here you can find the name, type and
          image of some Pokémon.
        </p>
        <img className="about__img" src="./public/universe.webp"></img>
      </div>
    </Layout>
  );
};

export { About };
