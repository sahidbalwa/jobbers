import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp 
        routing="path" 
        path="/sign-up"
        redirectUrl="/onboarding"
        signInUrl="/sign-in"
      />
    </div>
  );
};

export default SignUpPage; 