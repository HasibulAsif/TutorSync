import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';

export default function Register() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
      appState: { returnTo: from }
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="glass-card p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h1>
        <p className="text-white/70 text-center mb-8">
          Join TutorSync to connect with expert tutors and start your learning journey.
        </p>
        <button
          onClick={handleSignUp}
          className="w-full py-3 px-6 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
        >
          Sign Up
        </button>
        <p className="text-white/60 text-center mt-4 text-sm">
          Already have an account?{' '}
          <button
            onClick={() => loginWithRedirect({
              appState: { returnTo: from }
            })}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
