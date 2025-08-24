import { Icons } from "../Components/ui/icon";
import { HomeIcon, Linkedin, Code, Instagram } from "lucide-react"; // Adjust if needed for icon types in your setup

export const Navbar = [{ href: "/", icon: HomeIcon, label: "Home" }];

export const Contact = {
  email: "shivdutt059@gmail.com",
  tel: "+91 70584 04824",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/shivdutt-B",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shivdutt-bhadakwad-07a462280",
      icon: Linkedin,
      navbar: true,
    },
    Codolio: {
      name: "Codolio",
      url: "https://codolio.com/profile/CatFish",
      icon: Code, // adjust to an appropriate icon if available
      navbar: true,
    },
    Twitter: {
      name: "Twitter",
      url: "https://x.com/shivdutt059",
      icon: Icons.x,
      navbar: true,
    },
    Instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/_shivdutt._/?hl=en",
      icon: Instagram,
      navbar: true,
    },
  },
};
