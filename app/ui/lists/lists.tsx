import { getLists } from "@/app/lib/listsActions";
import { ListType } from "@/app/lib/definitions";
import Link from "next/link";

import KebabButton from "../KebabButton";
import ModalButton from "../modal-button";

interface IProps {
  userId: string;
}

export default async function Lists({ userId }: IProps) {
  const lists: ListType[] = await getLists(userId);

  return (
    <>
      <div className="my-2.5 flex justify-end md:my-4">
        <ModalButton txt={"New List +"} userId={userId} />
      </div>

      <ul>
        {lists.map((list) => (
          <li key={list.id} className="mb-8 flex duration-200 hover:bg-btn-color">
            <div className="inline-flex w-full justify-center bg-primary-color px-4 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              <Link
                className="grow cursor-pointer text-center text-xl font-bold"
                href={`/lists/${list.id}`}
              >
                <p>{list.name}</p>
              </Link>
              <div className="grow-0 flex items-center">
                <KebabButton listId={list.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
