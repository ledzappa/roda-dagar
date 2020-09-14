export const svDays = [
  'söndag',
  'måndag',
  'tisdag',
  'onsdag',
  'torsdag',
  'fredag',
  'lördag',
];

export const svMonthAbbr = [
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

export const getStaticDates = (year) => [
  {
    date: new Date(year + '-01-01'),
    name: 'Nyårsdagen',
  },
  {
    date: new Date(year + '-01-06'),
    name: 'Trettondedag jul',
  },
  {
    date: new Date(year + '-05-01'),
    name: 'Första maj',
  },
  {
    date: new Date(year + '-06-06'),
    name: 'Nationaldagen',
  },
  {
    date: new Date(year + '-10-31'),
    name: 'Alla helgons dag',
  },
  {
    date: new Date(year + '-12-24'),
    name: 'Julafton',
    notReallyRed: true,
  },
  {
    date: new Date(year + '-12-25'),
    name: 'Juldagen',
  },
  {
    date: new Date(year + '-12-26'),
    name: 'Annandag jul',
  },
  {
    date: new Date(year + '-12-31'),
    name: 'Nyårsafton',
    notReallyRed: true,
  },
];
