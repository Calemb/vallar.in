import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};
const logoStyle = {
  border: '1px solid red'
}
const navStyle = {
  border: '1px solid red'
}
const headerStyle = {
  display: 'flex'
}

const Header = () => (
  <div style={headerStyle}>
    <img class="logo" src="/logo.png" alt="my image" style={logoStyle} />
    <div class="nav" style={navStyle}>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>

    <style jsx>{`
    `} </style>
  </div>
);

export default Header;