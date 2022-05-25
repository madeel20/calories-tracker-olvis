import moment from "moment";

export const getPerDayCalories = (data) => {
  let perDayCalories = data.reduce((data, each) => {
    let date = moment(new Date(each.data()?.date.seconds * 1000)).format(
      "DD MMM YYYY"
    );
    data[date] = data[date]
      ? data[date] + Number(each.data().calories)
      : Number(each.data().calories);

    return data;
  }, {});

  return Object.entries(perDayCalories)
    .map(([date, calories]) => ({
      date,
      calories,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};
