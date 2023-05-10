import { useRouter } from "next/router";

import styles from "./Filters.module.css";

import { MONTHS, YEAR } from "../../../constants";

interface Props {
  isFiltered?: boolean;
}

function getYears(year: number) {
  const years = [];

  for (let index = year; index < year + 10; index++) {
    years.push(index);
  }

  return years;
}

export default function Filters({ isFiltered }: Props) {
  const router = useRouter();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (isFiltered) {
      router.push(`/events`);
    } else {
      const target = e.target as typeof e.target & {
        month: { value: string };
        year: { value: string };
      };

      router.push(`/events/${target.year.value}/${target.month.value}`);
    }
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

      <button className={styles.button}>
        {isFiltered ? "Clear" : "Filter"}
      </button>
    </form>
  );
}
