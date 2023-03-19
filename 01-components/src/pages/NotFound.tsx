import Layout from '../components/Layout';

const NotFound = () => {
    let currPage = window.location.pathname.slice(1);
    if (currPage.length !== 0 || currPage !== 'About') {
      currPage = ''
    }

  return (
    <Layout currentPage={currPage}>
      <div>This page doesn't exist</div>
    </Layout>
  );
};

export { NotFound };
