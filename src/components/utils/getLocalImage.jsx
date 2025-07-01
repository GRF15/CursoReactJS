
import TotebagImg from "../../assets/Bolsa1.png";
import MixDeFrutos1 from "../../assets/FrutosSecos1.jpg";
import Remera1Img from "../../assets/Remera1.jpg";
import Almendras from "../../assets/Almendras.jpg";
import Nueces from "../../assets/Nueces.png";
import Castañas from "../../assets/Castañas.png";

const imageMap = {
  "almendras": Almendras,
  "totebag": TotebagImg,
  "mixfrutos": MixDeFrutos1,
  "remera": Remera1Img,
  "nueces": Nueces,
  "castañas": Castañas,
};

export function getLocalImage(imageString) {
  return imageMap[imageString] || imageString;
}


