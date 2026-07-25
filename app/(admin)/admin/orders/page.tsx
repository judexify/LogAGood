import Orders from "@/components/admin/Orders";

type SearchParams = {
  query?: string;
  page?: string;
  status?: string;
  priority?: string;
  riderId?: string;
  date?: string;
  sortBy?: string;
};

async function page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { query, page, status, priority, riderId, date, sortBy } =
    await searchParams;

  return (
    <Orders
      searchQuery={query ?? ""}
      page={Number(page) || 1}
      pageSize={10}
      status={status}
      priority={priority}
      riderId={riderId}
      date={date}
      sortBy={sortBy === "oldest" ? "oldest" : "recent"}
    />
  );
}

export default page;
