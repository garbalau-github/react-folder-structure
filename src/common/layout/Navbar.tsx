import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/user'>Profile</Link>
    </nav>
  );
};

export default Navbar;
