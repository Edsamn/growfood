import MenuPageStyled from "./MenuPageStyled";

interface MenuPageProps {
  children: React.ReactNode;
}

function MenuPage({children}: MenuPageProps) {
  return (
    <>
      <MenuPageStyled>{children}</MenuPageStyled>
    </>
  );
}

export default MenuPage;
