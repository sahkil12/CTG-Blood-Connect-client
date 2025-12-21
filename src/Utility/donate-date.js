import dayjs from "dayjs";

export const getDonationStatus = (lastDonateDate) => {
     if (!lastDonateDate) {
          return {
               eligible: true,
               lastDonateText: "Never donated",
               eligibilityText: "Eligible to donate",
          };
     }

     const daysPassed = dayjs().diff(dayjs(lastDonateDate), "day");

     if (daysPassed >= 90) {
          return {
               eligible: true,
               lastDonateText: `${daysPassed} days ago`,
               eligibilityText: "Eligible to donate",
          };
     }

     return {
          eligible: false,
          lastDonateText: `${daysPassed} days ago`,
          eligibilityText: `Not eligible (${90 - daysPassed} days left)`,
     };
};
