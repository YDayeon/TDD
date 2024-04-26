export function createAgeCalculator() {
  return function (birthDate: Date, targetDate: Date) {
    const completedYear = targetDate.getFullYear() - birthDate.getFullYear();
    if (birthDate.getMonth() === targetDate.getMonth()) {
      if (birthDate.getDate() > targetDate.getDate()) return completedYear - 1;
    }

    if (birthDate.getMonth() > targetDate.getMonth()) return completedYear - 1;

    return completedYear;
  };
}
