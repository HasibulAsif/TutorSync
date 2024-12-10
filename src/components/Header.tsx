import { NavLink } from 'react-router-dom';
import { GraduationCap, UserCircle } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? 'text-white bg-white/10'
        : 'text-white/70 hover:text-white hover:bg-white/10'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-white">
            <GraduationCap className="w-8 h-8" />
            <span className="text-xl font-bold">TutorSync</span>
          </NavLink>
          
          <nav className="flex items-center gap-2">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/tutors" className={navLinkClasses}>
              Tutors
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" className={navLinkClasses}>
                  Dashboard
                </NavLink>
                <NavLink to="/sessions" className={navLinkClasses}>
                  Sessions
                </NavLink>
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10">
                    <img
                      src={user?.picture}
                      alt={user?.name}
                      className="w-8 h-8 rounded-full"
                    />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="px-4 py-2 text-sm text-white/70">{user?.email}</div>
                    <button
                      onClick={() => logout({ returnTo: window.location.origin })}
                      className="block w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
              >
                <UserCircle className="w-5 h-5" />
                Log In
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
