import React, { useState } from "react";
import { PasswordReset } from "../../components/features/auth/PasswordReset";

const ForgotPassword: React.FC = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const handleReset = (_email: string) => {
    // TODO: Implement password reset logic
    setError(undefined);
    setSuccess("If your email is registered, you will receive a reset link.");
    // setError("Reset failed"); // Example error
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
      <PasswordReset onSubmit={handleReset} error={error} success={success} />
    </div>
  );
};

export default ForgotPassword; 