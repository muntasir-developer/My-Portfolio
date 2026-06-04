// Central place for all external URLs.
// Swap the "#" placeholders for real links when you have them — this is
// the only file you need to touch.

export const links = {
  // AutoDM — featured project
  autodmDemo: "#", // TODO: AutoDM live demo URL
  autodmRepo: "#", // TODO: AutoDM GitHub repo URL

  // Socials
  github: "#", // TODO: GitHub profile URL
  linkedin: "#", // TODO: LinkedIn profile URL
  x: "#", // TODO: X (Twitter) profile URL

  // Known
  email: "mailto:mdmuntasirbhai10786@gmail.com",
};

/** True for the "#" placeholders so the UI can mark them as not-yet-live. */
export const isPlaceholder = (href: string) => href === "#";

/** Props for an <a> based on whether the href is an external URL. */
export const linkProps = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};
