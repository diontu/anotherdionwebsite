type FooterProps = {
  businessName: string;
  footerNav?: {
    title: string;
    links: {
      label: string;
      href: string;
    }[];
  }[];
  legalNav?: {
    label: string;
    href: string;
  }[];
  colClassName?: string;
};

const Footer = ({
  businessName,
  footerNav,
  legalNav,
  colClassName,
}: FooterProps) => {
  return (
    <>
      {footerNav && (
        <div className={`grid grid-cols-4 gap-6 text-base ${colClassName}`}>
          <div className="flex flex-col">
            <div className="font-medium mb-6">{businessName}</div>
          </div>
          {footerNav.map((nav) => (
            <div className="flex flex-col" key={nav.title}>
              <div className="font-medium mb-6">{nav.title}</div>
              {nav.links.map((link) => (
                <a
                  key={link.label}
                  className="no-underline decoration-inherit text-[15px] mb-2 opacity-60 transition"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
      <hr className="mt-10 mb-5" />
      <div className="flex justify-between text-sm text-[var(--color-de-emphasized)]">
        <div>© Copyright {businessName} 2024</div>
        {legalNav && (
          <div className="flex gap-5">
            {legalNav.map((link) => (
              <a
                key={link.label}
                className="no-underline decoration-inherit"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
