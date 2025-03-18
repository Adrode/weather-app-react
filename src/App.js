import { Main } from "./common/Main/styled";
import { ActualWeather } from "./features/ActualWeather";
import { HourlyWeather } from "./features/HourlyWeather";

const App = () => {
  return (
    <Main>
      <ActualWeather />
      <HourlyWeather />
      <HourlyWeather />
    </Main>
  );
}

export default App;
