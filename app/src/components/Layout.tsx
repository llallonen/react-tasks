import React from 'react';
import Header from './Header';

interface LayoutProps extends React.PropsWithChildren {
  currentPage: string;
}

class Layout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Header currentPage={this.props.currentPage} />
        <div className="page">
          <div className="page__content">{this.props.children}</div>
        </div>
      </>
    );
  }
}

export default Layout;
