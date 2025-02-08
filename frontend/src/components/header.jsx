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


const Header = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { isSignedIn,  user } = useUser();
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
      {/* Navbar */}
      <nav className="py-1 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-gray-800 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Link to="/landing-page" className="flex items-center gap-5">
          <div className="h-18 w-30">
            <img src="/logo.png" className="h-16 w-20 px-1" alt="Logo" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-lg font-medium text-white">
          {[
            { name: "Tournament", icon: <LayoutDashboard size={18} /> },
            { name: "Stages", icon: <GamepadIcon size={18} /> },
            { name: "Marketplace", icon: <ShoppingCart size={18} /> },
            { name: "Leaderboard", icon: <Trophy size={18} /> }
          ].map(({ name, icon }, index) => (
            <Link
              key={index}
              to={`/${name.toLowerCase()}`}
              className="relative flex items-center gap-2 text-white hover:text-blue-400 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              {icon} {name}
            </Link>
          ))}

       
          {isSignedIn  && (

            <ConnectButton
              client={client}
         
              appMetadata={{
                name: "Example app",
                url: "https://example.com",
              }}
              wallet="metamask"
            />

          )}

         

        </div>



        {/* Right Section */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <Button
              variant="outline"
              className="px-5 py-1.5 rounded-full border-blue-500 text-blue-600 hover:bg-blue-700 hover:text-white flex items-center gap-2 transition-all"
              onClick={() => setShowSignIn(true)}
            >
              <LogIn size={18} />
              Login
            </Button>
          </SignedOut>

          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                {/* Add your link content for recruiters here */}
              </Link>
            )}
            <UserButton appearance={{ elements: { avatarBox: "w-8 h-8" } }} />
          </SignedIn>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-60 h-full bg-gray-900 text-blue-500 flex flex-col gap-5 p-5 transform ${menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-all duration-300`}
        >
          {[
            { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
            { name: "Stages", icon: <GamepadIcon size={18} /> },
            { name: "Marketplace", icon: <ShoppingCart size={18} /> },
            { name: "Contact", icon: <MessageSquare size={18} /> },
            { name: "Leaderboard", icon: <Trophy size={18} /> }
          ].map(({ name, icon }, index) => (
            <Link
              key={index}
              to={`/${name.toLowerCase()}`}
              className="flex items-center gap-2 text-lg text-white hover:text-blue-400 transition-all"
            >
              {icon} {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Sign-In Modal */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg scale-105 transition-all relative z-50">
            <SignIn signUpForceRedirectUrl="/onboarding" fallbackRedirectUrl="/onboarding" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
