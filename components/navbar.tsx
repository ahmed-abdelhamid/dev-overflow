import Logo from "@/components/logo";
import ModeToggle from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] border-b bg-light-900 dark:bg-dark-200 dark:border-dark-500 dark:shadow-none border-light-800 shadow-light-200 sm:px-12 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <div>Profile</div>
      </div>
    </div>
  );
};
export default Navbar;
