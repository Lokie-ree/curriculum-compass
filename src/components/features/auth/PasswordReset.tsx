import React, { useState } from "react";

interface PasswordResetProps {
  onSubmit: (email: string) => void;
  error?: string;
  success?: string;
}

export const PasswordReset: React.FC<PasswordResetProps> = ({ onSubmit, error, success }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="input input-bordered"
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      <button type="submit" className="btn btn-primary w-full">Reset Password</button>
    </form>
  );
}; 