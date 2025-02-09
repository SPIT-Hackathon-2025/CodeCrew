import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  GamepadIcon,
  ShoppingCart,
  Trophy,
  MessageSquare,
  LogIn,
  Menu,
  X
} from "lucide-react";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client.js";

const navItems = [
  { name: "Tournament", icon: <LayoutDashboard size={18} />, protected: true },
  { name: "Stages", icon: <GamepadIcon size={18} />, protected: false },
  { name: "Marketplace", icon: <ShoppingCart size={18} />, protected: true },
  { name: "Leaderboard", icon: <Trophy size={18} />, protected: false }
];

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { isSignedIn, user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
    console.log("user", user);
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
<<<<<<< HEAD
      {/* Navbar */}
      <nav className="py-1 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-gray-800 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-5">
          <div className="h-18 w-30">
            <img src="/logo.png" className="h-20 w-30 px-1" alt="Logo" />
=======
      <nav className="py-3 h-16 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-gray-800/95 backdrop-blur-md shadow-lg border-b border-gray-700/50">
        {/* Logo Section */}
        <Link to="/landing-page" className="flex-shrink-0">
          <div className="h-10">
            <img
              src="/logo.png"
              className="h-full w-auto object-contain hover:opacity-90 transition-all duration-300"
              alt="EspeonX"
            />
>>>>>>> 5d0da228168f8f7f8dddfccfb3dcb37a252ebdef
          </div>
        </Link>
 {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 px-8">
          <div className="flex items-center gap-8 text-base font-medium">
            {navItems.map(({ name, icon, protected: isProtected }) => (
              <Link
                key={name}
                to={`/${name.toLowerCase()}`}
                className={`
                  relative flex items-center gap-2 text-gray-200 
                  hover:text-blue-400 transition-all duration-300 py-2
                  ${isProtected && !isSignedIn ? 'opacity-50 pointer-events-none' : ''}
                  after:content-[''] after:absolute after:w-0 after:h-[2px] 
                  after:bg-blue-500 after:bottom-0 after:left-1/2 
                  after:transition-all after:duration-300 
                  hover:after:w-full hover:after:left-0
                `}
              >
                {icon} {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {isSignedIn && (
            <ConnectButton
              client={client}
              appMetadata={{
                name: "EspeonX",
                url: "https://example.com",
              }}
              wallet="metamask"
              className="!py-2 !px-4 !text-sm !font-medium hidden md:flex"
            />
          )}

          <SignedOut>
            <Button
              variant="outline"
              className="px-4 py-1.5 rounded-full border-blue-500 text-blue-400 
                       hover:bg-blue-600 hover:text-white flex items-center gap-2 
                       transition-all duration-300 text-sm"
              onClick={() => setShowSignIn(true)}
            >
              <LogIn size={16} />
              <span className="hidden md:inline">Login</span>
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton 
              appearance={{ 
                elements: { 
                  avatarBox: "w-8 h-8 ring-2 ring-blue-500/50 hover:ring-blue-400 transition-all duration-300" 
                } 
              }} 
            />
          </SignedIn>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-700/80 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 
                   ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-gray-900/95 border-l 
                     border-gray-800 flex flex-col gap-4 p-6 transform 
                     ${menuOpen ? "translate-x-0" : "translate-x-full"}
                     transition-all duration-300 ease-out`}
          onClick={e => e.stopPropagation()}
        >
          {navItems.map(({ name, icon, protected: isProtected }) => (
            <Link
              key={name}
              to={`/${name.toLowerCase()}`}
              className={`
                flex items-center gap-3 text-gray-200 hover:text-blue-400 
                transition-all duration-300 py-2 border-b border-gray-800/50
                ${isProtected && !isSignedIn ? 'opacity-50 pointer-events-none' : ''}
              `}
              onClick={() => setMenuOpen(false)}
            >
              {icon} {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Sign-In Modal - Refined */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl scale-105 transition-all relative z-50 
                        border border-gray-700/50">
            <SignIn 
              signUpForceRedirectUrl="/" 
              fallbackRedirectUrl="/" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
