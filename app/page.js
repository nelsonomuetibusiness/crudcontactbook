import HeadingText from "@/components/HeadingText";
import Navbar from "@/components/Navbar";
import { deleteContact } from "@/lib/action";
import { getContacts } from "@/lib/data";
import Contact from "@/models/Contact";
import Link from "next/link";
import React from "react";
import { FiTrash, FiEdit } from "react-icons/fi";

const HomePage = async () => {
  const contacts = await getContacts();
  return (
    <main>
      <HeadingText title="CRUD Contact Book" description="All Contacts Below" />

      <Navbar />

      <div className="flex flex-col px-4 py-4">
        <div>
          <table className="table-auto w-full text-center whitespace-nowrap">
            <thead>
              <tr>
                <th className="px-4 py-4 title-font text-center tracking-wider font-medium text-yellow-600 text-sm bg-gray-100 rounded-tl rounded-bl">
                  FirstName
                </th>
                <th className="px-4 py-4 title-font text-center tracking-wider font-medium text-yellow-600 text-sm bg-gray-100 rounded-tl rounded-bl">
                  LastName
                </th>
                <th className="px-4 py-4 title-font text-center tracking-wider font-medium text-yellow-600 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Email
                </th>
                <th className="px-4 py-4 title-font text-center tracking-wider font-medium text-yellow-600 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Contact #
                </th>
                <th className="px-4 py-4 title-font text-center tracking-wider font-medium text-yellow-600 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((Contact) => (
                <tr key={contacts.id}>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3 ">
                    {Contact.firstName}
                  </td>

                  <td className="border-t-2 text-center border-gray-200 px-4 py-3 ">
                    {Contact.lastName}
                  </td>

                  <td className="border-t-2 text-center border-gray-200 px-4 py-3 ">
                    {Contact.email}
                  </td>

                  <td className="border-t-2 text-center border-gray-200 px-4 py-3 ">
                    {Contact.phone}
                  </td>

                  <td className="border-t-2 text-center border-gray-200 px-4 py-3 flex item-center gap-2 ">
                    <Link href={`contact/${Contact.id}`}>
                      <FiEdit style={{color: 'blue'}}/>
                    </Link>

                    <form action={deleteContact}>
                      <input hidden name="id" defaultValue={Contact.id} />
                      <button type="submit" className="">
                        <FiTrash style={{color: 'red'}} />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
