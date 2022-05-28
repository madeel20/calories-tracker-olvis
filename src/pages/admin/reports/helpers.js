import moment from "moment";
import { firestore } from "../../../firebase";

export const getReportsData = async () => {
  let last14DayDate = moment(new Date());
  last14DayDate.subtract("days", 13);

  let last7DayDate = moment(new Date());
  last7DayDate.subtract("days", 6);

  let [last7DaysData, last14DaysData] = await Promise.all([
    firestore
      .collection("foods")
      .where("date", ">=", last7DayDate.toDate())
      .where("date", "<=", new Date())
      .get()
      .then((res) => res.docs.map((each) => ({ id: each.id, ...each.data() }))),
    firestore
      .collection("foods")
      .where("date", ">=", last14DayDate.toDate())
      .where("date", "<=", last7DayDate.toDate())
      .get()
      .then((res) => res.docs.map((each) => ({ id: each.id, ...each.data() }))),
  ]);

  let caloriesPerUser = Object.values(
    last7DaysData.reduce((perUserCalories, eachRecord) => {
      perUserCalories[eachRecord?.uid] =
        (perUserCalories[eachRecord?.uid] || 0) + Number(eachRecord?.calories);
      return perUserCalories;
    }, {})
  );

  let averageCalories =
    caloriesPerUser.reduce((sum, each) => each + sum, 0) /
    caloriesPerUser.length;

  return {
    numberOfEntries: {
      last7Days: last7DaysData.length,
      lastWeek: last14DaysData.length,
    },
    averageNoOfCaloriesPerUserIn7Days: averageCalories.toFixed(0) || 0.0,
  };
};
