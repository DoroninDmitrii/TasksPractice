const daysWithMeetings = [{ day: 3, meetings: 1 }, { day: 4, meetings: 3 }, { day: 14, meetings: 3 }, { day: 21, meetings: 3 }, { day: 28, meetings: 1 }];
const periodLength = 30;
const vacationLength = 7;

function findBestVacationStart(daysWithMeetings, periodLength, vacationLength) {
  const meetingsCount = Array(periodLength).fill(0);

  for (let i = 0; i < daysWithMeetings.length; i++) {
    meetingsCount[daysWithMeetings[i].day] = daysWithMeetings[i].meetings;
  }

  let bestDay = 1;
  let minMeetingsMissed = 0;

  for (let i = 0; i <= vacationLength; i++) {
    minMeetingsMissed += meetingsCount[i];
  }

  let currentMeetingsMissed = minMeetingsMissed;

  for (let startDay = 2; startDay <= periodLength - vacationLength + 1; startDay++) {
    currentMeetingsMissed -= meetingsCount[startDay - 1];
    currentMeetingsMissed += meetingsCount[startDay + vacationLength - 1];

    if (currentMeetingsMissed < minMeetingsMissed) {
      minMeetingsMissed = currentMeetingsMissed;
      bestDay = startDay;
    }
  }
  return [bestDay, minMeetingsMissed];
}

console.log(findBestVacationStart(daysWithMeetings, periodLength, vacationLength));


