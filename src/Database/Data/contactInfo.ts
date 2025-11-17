export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
}

export interface ContactInformation {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  cvLink: string;
  socials: SocialLinks;
}

export const ContactInfo: ContactInformation = {
  name: "John Doe",
  title: "Full Stack Developer | Software Engineer",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  // Realistic placeholder profile image from Unsplash
  profileImage: "Profile.png",

  cvLink: "/dummy-cv.pdf",

  socials: {
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
};
