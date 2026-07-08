import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div
      className="flex justify-content-center align-items-center min-h-screen px-3"
      style={{
        background:
          "linear-gradient(135deg, #eff6ff 0%, #f8fafc 50%, #ffffff 100%)",
      }}
    >
      <div className="text-center w-full" style={{ maxWidth: "420px" }}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#2563eb" }}>
          TaskFlow
        </h1>

        <p className="text-600 mb-5">
          Create your account and start organizing your work.
        </p>

        <SignUp
          forceRedirectUrl="/dashboard"
          appearance={{
            elements: {
              card: {
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                borderRadius: "18px",
              },
              headerTitle: {
                fontSize: "1.6rem",
                fontWeight: "700",
              },
              headerSubtitle: {
                color: "#6b7280",
              },
              formButtonPrimary: {
                backgroundColor: "#2563eb",
                borderRadius: "10px",
              },
              footerActionLink: {
                color: "#2563eb",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
