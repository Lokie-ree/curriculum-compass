import React, { useState } from "react";
import { LoginForm } from "../../components/features/auth/LoginForm";

const Login: React.FC = () => {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleLogin = (_email: string, _password: string) => {
    // TODO: Implement authentication logic
    setError(undefined);
    // setError("Invalid credentials"); // Example error
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      <LoginForm onSubmit={handleLogin} error={error} />
    </div>
  );
};

export default Login; 