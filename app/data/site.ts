// Central place for all external URLs.
// Swap the "#" placeholders for real links when you have them — this is
// the only file you need to touch.

const whatsappNumber = "919905070158"; // international format, digits only
const whatsappMessage =
  "Hi Md Muntasir — I saw your portfolio and I'd like to talk about a project.";

export const links = {
  // AutoDM — featured project
  autodmDemo: "#", // TODO: AutoDM live demo URL
  autodmRepo: "#", // TODO: AutoDM GitHub repo URL

  // Socials
  github: "#", // TODO: GitHub profile URL
  linkedin: "#", // TODO: LinkedIn profile URL
  x: "#", // TODO: X (Twitter) profile URL

  // Contact
  email: "mailto:mdmuntasirbhai10786@gmail.com",
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`,
};

/** True for the "#" placeholders so the UI can mark them as not-yet-live. */
export const isPlaceholder = (href: string) => href === "#";

/** Props for an <a> based on whether the href is an external URL. */
export const linkProps = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};
