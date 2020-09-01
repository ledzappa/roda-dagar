import React from 'react';
import './App.css';

// rörliga: påsk, pingst, kristihimmel, midsommar, alla helgons
//

const svDays = [
  'söndag',
  'måndag',
  'tisdag',
  'onsdag',
  'torsdag',
  'fredag',
  'lördag',
];

const svMonthAbbr = [
  'jan',
  'feb',
  'mar',
  'apr',
  'maj',
  'jun',
  'jul',
  'aug',
  'sep',
  'okt',
  'nov',
  'dec',
];

const redDays2020 = [
  {
    date: '2020-01-01',
    name: 'Nyårsdagen',
  },
  {
    date: '2020-01-06',
    name: 'Trettondedag jul',
  },
  {
    date: '2020-04-10',
    name: 'Långfredagen',
  },
  {
    date: '2020-04-11',
    name: 'Påskafton',
  },
  {
    date: '2020-04-12',
    name: 'Påskdagen',
  },
  {
    date: '2020-04-13',
    name: 'Annandag påsk',
  },
  {
    date: '2020-05-01',
    name: 'Första maj',
  },
  {
    date: '2020-05-21',
    name: 'Kristi himmelfärdsdag',
  },
  {
    date: '2020-05-31',
    name: 'Pingstdagen',
  },
  {
    date: '2020-06-06',
    name: 'Nationaldagen',
  },
  {
    date: '2020-06-19',
    name: 'Midsommarafton',
    notReallyRed: true,
  },
  {
    date: '2020-06-20',
    name: 'Midsommardagen',
  },
  {
    date: '2020-10-31',
    name: 'Alla helgons dag',
  },
  {
    date: '2020-12-24',
    name: 'Julafton',
    notReallyRed: true,
  },
  {
    date: '2020-12-25',
    name: 'Juldagen',
  },
  {
    date: '2020-12-26',
    name: 'Annandag jul',
  },
  {
    date: '2021-01-01',
    name: 'Nyårsdagen',
  },
];

const getSqueezeDays = (day) => {
  const weekDayNo = day.date.getDay();
  if (weekDayNo === 2 || weekDayNo === 4) {
    const d = new Date(day.date.getTime() + 86400000 * (weekDayNo === 2 ? -1 : 1));
    if (
      redDays2020.filter((day) => new Date(day.date).getTime() === d.getTime())
        .length === 0
    ) {
      const squeezeDay = {
        date: d,
        isSqueezeDay: true,
        name: 'Klämdag',
      };
      return weekDayNo === 2 ? [squeezeDay, day] : [day, squeezeDay];
    }
  }

  return [day];
};

function App() {
  return (
    <div className="App">
      <h1>Röda dagar</h1>
      {redDays2020
        .map((day) => ({ ...day, date: new Date(day.date) }))
        .reduce((prev, curr) => [...prev, ...getSqueezeDays(curr)], [])
        .map((day) => ({ ...day, dayName: svDays[day.date.getDay()] }))
        //.filter((day) => day.date > new Date())
        .map((day) => (
          <div
            className={
              'day-container mb-1 p-1 text-left d-flex ' +
              (day.notReallyRed ? 'gray' : day.isSqueezeDay ? 'squeeze' : 'red')
            }
          >
            <div className="text-center date-box mr-3">
              <h1 className="mb-0">{day.date.getUTCDate()}</h1>
              <h4>{svMonthAbbr[day.date.getMonth()].toUpperCase()}</h4>
            </div>
            <div className="date-name">
              <h2 className="mb-0">
                {day.name} {day.dayName?.substr(0, 3)}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
