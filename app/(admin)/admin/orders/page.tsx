import Orders from "@/components/admin/Orders";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query, page } = await searchParams;

  return (
    <Orders searchQuery={query ?? ""} page={Number(page) || 1} pageSize={10} />
  );
}

export default page;
