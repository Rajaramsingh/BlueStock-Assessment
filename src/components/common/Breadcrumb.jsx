import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <div key={name} className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                {isLast ? (
                  <span className="text-gray-700 capitalize">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-blue-600 hover:text-blue-800 capitalize"
                  >
                    {name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 