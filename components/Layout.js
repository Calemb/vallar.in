import Header from './Header';

const layoutStyle = {
  height: '100%',
  width: '100vw',
  border: '1px solid #DDD',
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style global jsx>{`
        body {
          margin: 0px;
          padding: 0px;
          background-color: #000;
        }
      `}</style>
  </div>
);

export default Layout;