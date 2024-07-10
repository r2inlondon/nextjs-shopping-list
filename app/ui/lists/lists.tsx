import { getLists } from "@/app/lib/actions";

interface IProps {
  userId: string;
}

export default async function Lists({ userId }: IProps) {
  const lists = await getLists(userId);

  return <div>lists</div>;
}
