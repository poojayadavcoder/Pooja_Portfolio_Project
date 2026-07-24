const NavItem = ({ item, iconClasses, tooltipClasses }) => {
  const isExternal =
    item.link.startsWith("http") || item.link.startsWith("mailto");
  const content = (
    <>
      <span className={iconClasses}>{item.name}</span>
      <span className={tooltipClasses}>{item.mainName}</span>
    </>
  );

  return isExternal ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
    >
      {content}
    </a>
  ) : (
    <Link to={`/${item.link}`} className="relative group">
      {content}
    </Link>
  );
};

export default NavItem;
