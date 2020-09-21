import React, { Component } from 'react';
import './App.css';
import { svDays, svMonthAbbr, getStaticDates } from './svDates';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const oneDay = 86400000;

const getSqueezeDays = (day, dates) => {
  const weekDayNo = day.date.getDay();
  if (weekDayNo === 2 || weekDayNo === 4) {
    const d = new Date(
      day.date.getTime() + oneDay * (weekDayNo === 2 ? -1 : 1)
    );
    if (
      dates.filter((day) => new Date(day.date).getTime() === d.getTime())
        .length === 0 &&
      d.getFullYear() === day.date.getFullYear()
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
  const date = new Date(
    `${year}-${
      f <= 31 ? '03-' + ('0' + f).slice(-2) : '04-' + ('0' + (f - 31)).slice(-2)
    }`
  );

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
  // midsummers day is on a saturday 20-26 june
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
      selectedYear: new Date().getFullYear(),
      showPastDates: false,
    };
  }

  getAllDates() {
    const dates = [
      ...getStaticDates(this.state.selectedYear),
      ...getEasterBasedDays(this.state.selectedYear),
      ...getMidsummerDays(this.state.selectedYear),
    ];

    return dates
      .reduce((prev, curr) => [...prev, ...getSqueezeDays(curr, dates)], [])
      .sort((a, b) => a.date - b.date)
      .map((day) => ({ ...day, dayName: svDays[day.date.getDay()] }));
  }

  changeYear(change) {
    this.setState((state) => ({
      selectedYear: state.selectedYear + change,
    }));
  }

  render() {
    return (
      <div className="App">
        <Header
          squeezeDays={
            this.getAllDates().filter((date) => date.isSqueezeDay).length
          }
          year={this.state.selectedYear}
          changeYear={(change) => this.changeYear(change)}
        ></Header>
        <div className="container pt-4">
          <div className="row">
            <div className="col-12 p-0 text-center">
              {this.state.selectedYear === new Date().getFullYear() ? (
                <div
                  className="d-inline-block text-right clickable mb-2"
                  onClick={() =>
                    this.setState({ showPastDates: !this.state.showPastDates })
                  }
                >
                  <FontAwesomeIcon
                    icon={this.state.showPastDates ? faEyeSlash : faEye}
                  />
                  {this.state.showPastDates ? ' Dölj' : ' Visa'} tidigare datum
                </div>
              ) : (
                ''
              )}
              {this.getAllDates()
                .filter(
                  (day) =>
                    day.date > new Date() ||
                    this.state.showPastDates ||
                    this.state.selectedYear !== new Date().getFullYear()
                )
                .map((day) => (
                  <div
                    className={
                      'day-container d-flex position-relative mb-2 text-left ' +
                      (day.notReallyRed
                        ? 'gray'
                        : day.isSqueezeDay
                        ? 'squeeze'
                        : 'red') +
                      (day.date < new Date() ? ' past-date' : '')
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
