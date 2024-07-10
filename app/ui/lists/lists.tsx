import { getLists } from "@/app/lib/actions";
import { ListType } from "@/app/lib/definitions";

interface IProps {
  userId: string;
}

export default async function Lists({ userId }: IProps) {
  const lists: ListType[] = await getLists(userId);

  return (
    <ul>
      {lists.map((list) => (
        <li key={list.id} className="mb-8 flex duration-300 hover:scale-105">
          <div className="inline-flex w-full cursor-pointer justify-center bg-primary-color px-4 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            <p className="text-xl font-bold">{list.name}</p>
          </div>
          {/* <EllipsisVerticalMenu
           deleteList={deleteList}
           listId={list.id}
           handleListToRename={handleListToRename}
         /> */}
        </li>
      ))}
    </ul>
  );
}
