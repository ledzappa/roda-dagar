import React, { Component } from 'react';
import './App.css';
import { svDays, svMonthAbbr, staticDays } from './svDates';

const oneDay = 86400000;

const getSqueezeDays = (day) => {
  const weekDayNo = day.date.getDay();
  if (weekDayNo === 2 || weekDayNo === 4) {
    const d = new Date(
      day.date.getTime() + oneDay * (weekDayNo === 2 ? -1 : 1)
    );
    if (
      staticDays.filter((day) => new Date(day.date).getTime() === d.getTime())
        .length === 0
    ) {
      const squeezeDay = {
        date: d,
        isSqueezeDay: true,
        name: 'Klämdag',
      };
      return [day, squeezeDay];
    }
  }

  return [day];
};

const getEasterBasedDays = (year) => {
  // gauss easter formula
  const [a, b, c] = [year % 19, year % 4, year % 7];
  const d = (19 * a + 24) % 30;
  const e = (2 * b + 4 * c + 6 * d + 5) % 7;
  const f = 22 + d + e;
  const date = new Date(`${year}-${f <= 31 ? '03-' + f : '04-' + (f - 31)}`);

  return [
    { name: 'Långfredagen', date: new Date(date.getTime() - oneDay * 2) },
    { name: 'Påskafton', date: new Date(date.getTime() - oneDay) },
    { name: 'Påskdagen', date: date },
    { name: 'Annandag påsk', date: new Date(date.getTime() + oneDay) },
    {
      name: 'Kristihimmelfärdsdag',
      date: new Date(date.getTime() + oneDay * 39),
    },
    { name: 'Pingsdagen', date: new Date(date.getTime() + oneDay * 49) },
  ];
};

const getMidsummerDays = (year) => {
  for (let i = 20; i <= 26; i++) {
    const date = new Date(year + '-06-' + i);
    if (date.getDay() === 6) {
      return [
        {
          name: 'Midsommarafton',
          date: new Date(date.getTime() - oneDay),
          notReallyRed: true,
        },
        {
          name: 'Midsommardagen',
          date,
        },
      ];
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: new Date().getFullYear(),
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Röda dagar</h1>
        {[
          ...staticDays,
          ...getEasterBasedDays(this.state.currentYear),
          ...getMidsummerDays(this.state.currentYear),
        ]
          .sort((a, b) => a.date - b.date)
          .reduce((prev, curr) => [...prev, ...getSqueezeDays(curr)], [])
          .map((day) => ({ ...day, dayName: svDays[day.date.getDay()] }))
          // .filter((day) => day.date > new Date())
          .map((day) => (
            <div
              className={
                'day-container d-flex position-relative mb-2 text-left ' +
                (day.notReallyRed
                  ? 'gray'
                  : day.isSqueezeDay
                  ? 'squeeze'
                  : 'red')
              }
            >
              <div className="text-center date-box mr-2">
                <h1 className="mb-0">{day.date?.getUTCDate()}</h1>
                <h4>{svMonthAbbr[day.date.getMonth()]?.toUpperCase()}</h4>
              </div>
              <div className="date-name">
                <h2 className="mb-0 pl-3">{day.name}</h2>
              </div>
              <div className="day-name">{day.dayName?.substr(0, 3)}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
