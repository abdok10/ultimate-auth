import Navbar from "./_components/Navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-l from-[#946263] to-[#676394]">
      <Navbar />
      {children}
    </div>
  );
};
export default ProtectedLayout;
