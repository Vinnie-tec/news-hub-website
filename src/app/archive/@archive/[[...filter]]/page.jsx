import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/lib/news";
import NewsList from "@/components/news-list";
import Link from "next/link";
import React from "react";

const FilteredNewPage = async ({ params }) => {
  const { filter } = await params;
  // const newss = getNewsForYear(filter);
  const selectedYear = filter?.[0]; // Get the first year from the filter array
  const selectedMonth = filter?.[1]; // Get the second month from the filter array (if available)

  let news;
  let links = getAvailableNewsYears(); // Assuming you have a function to get available years

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear); // Assuming you have a function to get available months for a year
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  let newContent = <p>No news found for the selected criteria.</p>;

  if (news && news.length > 0) {
    newContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid Filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((year) => {
              const hreff = selectedYear
                ? `/archive/${selectedYear}/${year}`
                : `/archive/${year}`;

              return (
                <li key={year}>
                  <Link href={hreff}>{year}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newContent}
    </>
  );
};

export default FilteredNewPage;
