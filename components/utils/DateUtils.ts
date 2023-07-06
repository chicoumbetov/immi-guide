import { Animals, Frequency } from '../src/API';

const parseToDateObj = (date?: string | null) => (date ? new Date(date) : new Date());

const addMonths = (date:string, nbmonths: number) => {
  const dateObj = parseToDateObj(date);
  const d = dateObj.getDate();
  dateObj.setMonth(dateObj.getMonth() + nbmonths);
  if (dateObj.getDate() !== d) {
    dateObj.setDate(0);
  }
  return dateObj.toISOString().substr(0, 10);
};

const frequencyToMonths = (frequence: Frequency) => {
  switch (frequence) {
    case Frequency.annual:
      return 12;
    case Frequency.quarterly:
      return 3;
    case Frequency.monthly:
    default:
      return 1;
  }
};

const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

const lastDayOfMonthDate = (date: Date) => {
  const returnDate = new Date(date.getTime());
  returnDate.setMonth(returnDate.getMonth() + 1);
  returnDate.setDate(0);
  returnDate.setHours(23, 59, 59);
  return returnDate;
};

const getAge = (animals: Animals | undefined | null) => {
  if (animals) {
    const today = new Date();

    const birthDate = parseToDateObj(animals?.birthDate);
    const age = (today.getFullYear() - birthDate.getFullYear());
    // console.log('age : ', age);
    let m = (age) * 12;
    // console.log('m 1: ', m);
    // console.log('birthDate.getMonth(): ', birthDate.getMonth());
    m -= birthDate.getMonth();
    // console.log('m 2: ', m);
    m += today.getMonth();
    // console.log('m 3: ', m);
    if (m === 0) {
      const day = today.getDate() - birthDate.getDate();
      return `${day} jours`;
    }
    if (m <= 18) {
      return `${m} mois `;
    }
    return `${age} ans `;
  }
  return '';
};

const currentDateTime = new Date();
// Time right now:
const dateTimeNow = `${currentDateTime.getDate()}/${
  currentDateTime.getMonth() + 1}/${
  currentDateTime.getFullYear()} ${
  currentDateTime.getHours()}:${
  currentDateTime.getMinutes()}:${
  currentDateTime.getSeconds()}`;

const getFullTimeFunc = (dateToGet?: string | null) => {
  if (dateToGet) {
    const dateObj = parseToDateObj(dateToGet);
    return (`${dateObj.getDate()}/${
      dateObj.getMonth() + 1}/${
      dateObj.getFullYear()} ${
      dateObj.getHours()}:${
      dateObj.getMinutes()}:${
      dateObj.getSeconds()}`);
  }
  return null;
};

const convertDate = (targetDate?: string | null) => {
  if (targetDate) {
    const target = parseToDateObj(targetDate);
    return (`${target.getDate()}/${target.getMonth()}/${target.getFullYear()}`);
  }
  return null;
};
const convertTime = (targetDate?: string | null) => {
  if (targetDate) {
    const target = parseToDateObj(targetDate);
    return (`${target.getHours()}h${target.getMinutes()}`);
  }
  return null;
};

/**
 * Today for tableau de bord since moment didnt translate on ios and android correctly
 */
const auj = new Date().getDay();
const mois = new Date().getMonth();

const aujFunc = () => {
  if (auj) {
    switch (auj) {
      case 1:
        return ('Lundi');
      case 2:
        return ('Mardi');
      case 3:
        return 'Mercredi';
      case 4:
        return 'Jeudi';
      case 5:
        return 'Vendredi';
      case 6:
        return 'Samedi';
      case 7:
        return 'Dimanche';
      default:
    }
  }

  return () => {};
};
const yearFunc = () => {
  switch (mois) {
    case 0:
      return 'Janvier';
    case 1:
      return 'Fevrier';
    case 2:
      return 'Mars';
    case 3:
      return 'Avril';
    case 4:
      return 'Mai';
    case 5:
      return 'Juin';
    case 6:
      return 'Juillet';
    case 7:
      return 'Août';
    case 8:
      return 'Septembre';
    case 9:
      return 'Octobre';
    case 10:
      return 'Novembre';
    case 11:
      return 'Decembre';
    default:
  }
  return () => {};
};
const today = (`${aujFunc()} ${new Date().getDate()} ${yearFunc()} ${new Date().getFullYear()}`);

export default {
  parseToDateObj,
  addMonths,
  frequencyToMonths,
  daysInMonth,
  lastDayOfMonthDate,
  getAge,
  dateTimeNow,
  today,
  getFullTimeFunc,
  convertDate,
  convertTime,
};
