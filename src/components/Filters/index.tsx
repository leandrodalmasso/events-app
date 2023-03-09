import { useRouter } from "next/router";

import styles from "./Filters.module.css";

import { MONTHS, YEAR } from "../../../constants";

function getYears(year: number) {
  const years = [];

  for (let index = year; index < year + 10; index++) {
    years.push(index);
  }

  return years;
}

export default function Filters() {
  const router = useRouter();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      month: { value: string };
      year: { value: string };
    };

    const { month, year } = target;

    router.push(`/events/${year.value}/${month.value}`);
  }

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <label htmlFor="year">
        Year
        <select id="year" className={styles.select}>
          {getYears(YEAR).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="month">
        Month
        <select id="month" className={styles.select}>
          {MONTHS.map((month) => (
            <option key={month.value} value={month.value}>
              {month.text}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Filter" className={styles.button} />
    </form>
  );
}
