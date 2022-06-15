import React from 'react';
import ReservationListCard from './ReservationListCard';

const FlightList = ({ flightList }) => {
  return (
    <div>
      {flightList &&
        flightList.map(
          ({
            name,
            price,
            logo_url,
            origin,
            destination,
            departure_time,
            arrival_time,
            duration,
            flight_name,
            flight_id,
            goToPayment,
          }) => {
            return (
              <ReservationListCard
                key={flight_id}
                flight_id={flight_id}
                src={logo_url}
                name={name}
                flight_name={flight_name}
                departure_time={departure_time}
                origin={origin}
                duration={duration}
                arrival_time={arrival_time}
                destination={destination}
                price={price}
              />
            );
          }
        )}
    </div>
  );
};

export default FlightList;
