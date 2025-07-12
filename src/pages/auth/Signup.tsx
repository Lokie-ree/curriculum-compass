import React, { useState } from "react";
import { SignupForm } from "../../components/features/auth/SignupForm";

const Signup: React.FC = () => {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSignup = (_name: string, _email: string, _password: string) => {
    // TODO: Implement signup logic
    setError(undefined);
    // setError("Signup failed"); // Example error
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <SignupForm onSubmit={handleSignup} error={error} />
    </div>
  );
};

export default Signup; 