const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-l from-[#946263] to-[#676394]">
      {children}
    </div>
  );
};
export default AuthLayout;
