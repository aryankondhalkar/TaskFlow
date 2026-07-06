import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex justify-content-center align-items-center min-h-screen">
      <SignUp forceRedirectUrl="/sign-up" />
    </div>
  );
};

export default SignUpPage;
