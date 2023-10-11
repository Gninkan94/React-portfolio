import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="mt-auto text-green p-6">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-green mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
      
        <h2><a href="https://github.com/Gninkan94/The-React-portfolio"> Github repo </a></h2>
        <h4>&copy; {new Date().getFullYear()} React Portfolio </h4>
      </div>
    </footer>
  );
};

export default Footer;
