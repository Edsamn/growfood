import MenuCardStyled from "./MenuCardStyled";

interface MenuCardProps {
  children: React.ReactNode;
}

function MenuCard({children}: MenuCardProps) {
  return <MenuCardStyled>{children}</MenuCardStyled>;
}

export default MenuCard;
