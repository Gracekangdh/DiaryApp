export function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thue", "Fri", "Sat"][
    today.getDay()
  ];

  return {
    date: `${day} / ${month} / ${year}`,
    weekday,
  };
}
