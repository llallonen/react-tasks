import React from 'react';
import Form from '../components/Form/Form';
import Layout from '../components/Layout';
import { TNote } from '../types/types';

class FormPage extends React.Component<Record<string, never>, { notes: TNote[] }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { notes: [] };
  }

  render() {
    let currPage = window.location.pathname.slice(1);
    if (currPage === 'notes') {
      currPage = 'Notes page';
    }

    return (
      <Layout currentPage={currPage}>
        <div className="form-page__wrapper">
          <h1>Add Pokémon</h1>
          <div className="form-page">
            <img className="form__img" src="./public/ash.webp"></img>
            <div className="form-page__content">
              <p>
                Hello! Are you new to the Pokémons trainers club? Do you want to become a Pokémon
                Master? First, tell us what Pokémon you&apos;ve already met! To do this, fill out
                this short form
              </p>
              <Form />
            </div>
            <img className="form__img" src="./public/misty.webp"></img>
          </div>
        </div>
      </Layout>
    );
  }
}

export { FormPage };
