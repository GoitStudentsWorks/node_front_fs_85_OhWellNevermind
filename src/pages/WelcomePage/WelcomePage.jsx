
import WhyDrinkWater from "../WhyDrinkWater/WhyDrinkWater";
import WaterConsumption from "../WaterСonsumptionTracker/WaterConsumption";
import { Container } from "./WelcomePage.styled";
const WelcomePage = () => {
  return (
    <Container>
      <WaterConsumption />
      <WhyDrinkWater/>
    </Container>
  );
};

export default WelcomePage;
