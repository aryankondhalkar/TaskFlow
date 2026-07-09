import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div
      className="flex justify-content-center align-items-center min-h-screen px-3"
      style={{
        background:
          "linear-gradient(135deg,#eff6ff 0%,#f8fafc 55%,#ffffff 100%)",
      }}
    >
      <div className="w-full text-center" style={{ maxWidth: "460px" }}>
        <h1
          style={{
            color: "#2563eb",
            fontSize: "2.8rem",
            fontWeight: 700,
            marginBottom: ".5rem",
          }}
        >
          TaskFlow
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "1.05rem",
            marginBottom: "2rem",
          }}
        >
          Welcome back. Sign in to continue managing your tasks.
        </p>

        <SignIn
          forceRedirectUrl="/dashboard"
          appearance={{
            elements: {
              card: {
                borderRadius: "16px",
                boxShadow: "0 10px 28px rgba(0,0,0,.08)",
                border: "1px solid #e5e7eb",
                padding: "2rem",
              },

              headerTitle: {
                fontSize: "1.7rem",
                fontWeight: "700",
              },

              headerSubtitle: {
                color: "#6b7280",
              },

              formFieldInput: {
                height: "54px",
                borderRadius: "12px",
                border: "1px solid #dbe4f0",
                fontSize: "1rem",
              },

              formButtonPrimary: {
                height: "54px",
                borderRadius: "12px",
                backgroundColor: "#2563eb",
                fontWeight: "600",
                fontSize: "1rem",
              },

              socialButtonsBlockButton: {
                height: "54px",
                borderRadius: "12px",
                border: "1px solid #dbe4f0",
              },

              dividerLine: {
                background: "#e5e7eb",
              },

              dividerText: {
                color: "#6b7280",
              },

              footerActionLink: {
                color: "#2563eb",
                fontWeight: "600",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
