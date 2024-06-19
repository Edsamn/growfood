import ImageStyled from "./ImageStyled";
import MenuCard from "./MenuCard";
import TitleStyled from "./TitleStyled";
import pizza from "../../assets/pizza.png";
import burguer from "../../assets/hamburguer-delicioso-isolado-no-fundo-branco.jpg";
import salad from "../../assets/salada.png";
import MenuPageStyled from "./MenuPageStyled";

function MenuPage() {
  return (
    <>
      <MenuPageStyled>
        <MenuCard>
          <TitleStyled>Pizza</TitleStyled>
          <ImageStyled src={pizza}></ImageStyled>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium dicta impedit harum blanditiis
            magnam reprehenderit fugit hic quod laboriosam repellat repudiandae, tempora dolorem accusamus modi iusto
            quos, dignissimos odio?
          </p>
        </MenuCard>
        <MenuCard>
          <TitleStyled>Burguer</TitleStyled>
          <ImageStyled src={burguer}></ImageStyled>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium dicta impedit harum blanditiis
            magnam reprehenderit fugit hic quod laboriosam repellat repudiandae, tempora dolorem accusamus modi iusto
            quos, dignissimos odio?
          </p>
        </MenuCard>
        <MenuCard>
          <TitleStyled>Salada</TitleStyled>
          <ImageStyled src={salad}></ImageStyled>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium dicta impedit harum blanditiis
            magnam reprehenderit fugit hic quod laboriosam repellat repudiandae, tempora dolorem accusamus modi iusto
            quos, dignissimos odio?
          </p>
        </MenuCard>
      </MenuPageStyled>
    </>
  );
}

export default MenuPage;
