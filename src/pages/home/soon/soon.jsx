import { useQuery } from "react-query";
import { getAllEvents } from "../../../services/events";
import "./soon.scss";

const Soon = () => {
  const {data, isLoading, error} = useQuery("get all events", getAllEvents)
  if(isLoading) {
      console.log('events is loading')
  }else if(data) {
      console.log('events', data)
  } else {
      console.log(error)
  }
  return (
    <div className="soon">
      <div className="title">
        <h3 className="title-txt">Coming Soon!</h3>
      </div>

      <div className="flex">
      {!isLoading &&
      data?.data?.result?.map(({_id, name, image, description}) => {
        return (
          <div key={_id} className="box">
            <div className="img" style={{backgroundImage: `url(${image})`}}></div>
            <div className="txt">
              <p className="name">{name}</p>
              <p className="info">{description}</p>
            </div>
          </div>
        )
      })}
      </div>
      
    </div>
  );
};

export default Soon;
