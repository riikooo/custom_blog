type ResultsPropsType = {
  results: {
    country:string;
    cityName:string;
    temperature:string;
    conditionText:string;
    icon:string;
  }
}

const WhetherResults = ({ results }: ResultsPropsType) => {
  const { country, cityName, temperature, conditionText, icon } =
  results;
  return (
    <div className="WhetherResults">
      {country && <div>{country}</div>}
      {cityName && <div>{cityName}</div>}
      {temperature && <div>{temperature}<span>°C</span></div>}
      {conditionText &&
        <div className="WhetherResults-img">
          <img src={icon} alt="icon"/>
          <span>{conditionText}</span>
        </div>
      }
    </div>
  );
}

export default WhetherResults;
