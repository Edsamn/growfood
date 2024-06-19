import MenuCard from "../components/menu-page/MenuCard";
import MenuPage from "../components/menu-page/MenuPage";
import TitleStyled from "../components/menu-page/TitleStyled";
import pizza from "../assets/pizza.png";
import burguer from "../assets/hamburguer-delicioso-isolado-no-fundo-branco.jpg";
import salad from "../assets/salada.png";
import ImageStyled from "../components/menu-page/ImageStyled";
import PageDefault from "../components/PageDefault";

function Menu() {
  return (
    <>
      <PageDefault>
        <MenuPage>
          <MenuCard>
            <TitleStyled>Pizza</TitleStyled>
            <ImageStyled src={pizza}></ImageStyled>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium dicta impedit harum blanditiis magnam
              reprehenderit fugit hic quod laboriosam repellat repudiandae, tempora dolorem accusamus modi iusto quos, dignissimos odio?
            </p>
          </MenuCard>
          <MenuCard>
            <TitleStyled>Burguer</TitleStyled>
            <ImageStyled src={burguer}></ImageStyled>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium dicta impedit harum blanditiis magnam
              reprehenderit fugit hic quod laboriosam repellat repudiandae, tempora dolorem accusamus modi iusto quos, dignissimos odio?
            </p>
          </MenuCard>
          <MenuCard>
            <TitleStyled>Salada</TitleStyled>
            <ImageStyled src={salad}></ImageStyled>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium dicta impedit harum blanditiis magnam
              reprehenderit fugit hic quod laboriosam repellat repudiandae, tempora dolorem accusamus modi iusto quos, dignissimos odio?
            </p>
          </MenuCard>
        </MenuPage>
      </PageDefault>
    </>
  );
}

export default Menu;
