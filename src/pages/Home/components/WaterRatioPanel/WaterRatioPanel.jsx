import {
  WaterPanelContainer,
  TitleWaterPanel,
  Title,
  ContainerBar,
  Bar,
  ProgressBar,
  Dot,
  WaterPanel,
  DecorWrap,
  DecorList,
  List,
  Start,
  Middle,
  End,
  Button,
  AddWater,
} from "./WaterRatioPanel.styled";
import { CirclePlus } from "../../../../components/icons/CirclePlus";

export const WaterRatioPanel = () => {
  return (
    <WaterPanelContainer>
      <TitleWaterPanel>
        <Title>Today</Title>
        <ContainerBar>
          <Bar>
            <ProgressBar></ProgressBar>
          </Bar>
          <Dot></Dot>
        </ContainerBar>
        <WaterPanel>
          <DecorWrap>
            <DecorList></DecorList>
            <DecorList></DecorList>
            <DecorList></DecorList>
          </DecorWrap>
          <List>
            <Start>0%</Start>
            <Middle>50%</Middle>
            <End>100%</End>
          </List>
        </WaterPanel>
      </TitleWaterPanel>
      <div>
        <Button>
          <CirclePlus width={24} height={24} stroke={"#fff"} />
          <AddWater>Add water</AddWater>
        </Button>
      </div>
    </WaterPanelContainer>
  );
};