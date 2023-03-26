import Form from '../components/Form/Form';
import Layout from '../components/Layout';

const FormPage = () => {
  let currPage = window.location.pathname.slice(1);
  if (currPage === 'about') {
    currPage = 'About page';
  }
  return (
    <Layout currentPage={currPage}>
      <div className="form-page__wrapper">
        <h2>Add Pokémon</h2>
        <div className="form-page">
          <img className="form__img" src="./ash.webp"></img>
          <div className="form-page__content">
            <p>
              Hello! Are you new to the Pokémons trainers club? Do you want to become a Pokémon
              Master? First, tell us what Pokémon you've already met! To do this, fill out this
              short form
            </p>
            <Form />
          </div>
          <img className="form__img" src="./misty.webp"></img>
        </div>
      </div>
    </Layout>
  );
};

export { FormPage };
