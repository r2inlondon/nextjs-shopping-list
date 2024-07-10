import Lists from "@/app/ui/lists/lists";

export default function page() {
  const userId = "73113bf6-f47a-4785-95bc-4407c163fd98";

  return <div>{userId && <Lists userId={userId} />}</div>;
}
