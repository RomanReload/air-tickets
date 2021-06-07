import { uniqueId, chunk } from "lodash";

const makeReadableTime = (time) => {
  return time.toLocaleString().split(",")[1].split(":").slice(0, 2).join(":");
};

const getShowedTickets = (props, showedTickets = 5) => {
  if (props.length !== 0) {
    const fiveTickets = chunk(props, showedTickets)[0];
    const dataTickets = fiveTickets.map((obj) => {
      const { price, segments, carrier } = obj;
      const { origin, destination, duration, stops } = segments[0];
      const backOrigin = segments[1].origin;
      const backDestination = segments[1].destination;
      const backDuration = segments[1].duration;
      const backStops = segments[1].stops;

      const departureTime = new Date(segments[0].date);
      const arrivalTime = new Date(
        departureTime.getTime() + segments[0].duration * 60 * 1000
      ).toLocaleString();

      const backDepTime = new Date(segments[1].date);
      const backArrTime = new Date(
        backDepTime.getTime() + segments[1].duration * 60 * 1000
      ).toLocaleString();

      const showedDepartureTime = makeReadableTime(departureTime);
      const showedArrivalTime = makeReadableTime(arrivalTime);

      const showedBackDepTime = makeReadableTime(backDepTime);
      const showedBackArrTime = makeReadableTime(backArrTime);

      return (
        <div
          key={uniqueId(obj)}
          className="col-12 mb-2 ticket-block rounded p-1"
        >
          <table key={uniqueId(obj)} className="table">
            <thead className="tickets-table">
              <tr className="border-0">
                <th scope="row" className="h3 text-primary">
                  <strong>{(price / 73.5).toFixed(0)} $</strong>
                </th>
                <th></th>
                <th>
                  <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <p className="text-secondary">{`${origin} - ${destination}`}</p>
                  <p>{`${showedDepartureTime}:${showedArrivalTime}`}</p>
                </th>
                <th>
                  <p className="text-secondary">Время в пути</p>
                  <p>{Math.floor(duration / 60)} часов</p>
                </th>
                <th>
                  <p className="text-secondary">Пересадки {stops.length}</p>
                  <p>{stops.join(",")}</p>
                </th>
              </tr>
              <tr>
                <th>
                  <p className="text-secondary">{`${backOrigin} - ${backDestination}`}</p>
                  <p>{`${showedBackDepTime}:${showedBackArrTime}`}</p>
                </th>
                <th>
                  <p className="text-secondary">Время в пути</p>
                  <p>{Math.floor(backDuration / 60)} часов</p>
                </th>
                <th>
                  <p className="text-secondary">Пересадки {backStops.length}</p>
                  <p>{backStops.length > 0 ? backStops.join(",") : "-"}</p>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });

    return dataTickets;
  }
  return null;
};

export default getShowedTickets;
