import Lists from "@/app/ui/lists/lists";

export default function page() {
  const userId = "7ec26f8a-bc9a-4ec2-a997-53180839555e";

  return <div>{userId && <Lists userId={userId} />}</div>;
}
