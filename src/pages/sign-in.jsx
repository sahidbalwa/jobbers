import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn 
        routing="path" 
        path="/sign-in" 
        redirectUrl="/jobs"
        signUpUrl="/sign-up"
      />
    </div>
  );
};

export default SignInPage; 