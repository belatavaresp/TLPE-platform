import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import { role, teachersData } from "@/lib/data"

type User = {
  id: number;
  email?: string;
  userID: string;
  name: string;
  photo: string;
  tipo: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "UserID",
    accessor: "userId",
    className: "hidden md:table-cell",
  },
  {
    header: "Tipo",
    accessor: "tipo",
    className: "hidden md:table-cell",
  },
  {
    header: "Ações",
    accessor: "action",
  },
];

const Users = () => {

  const renderRow = (item: User) => (
    <tr key={item.id} className="border-b border-gray-200 text-sm hover:bg-lightGray">
      <td className="flex items-center gap-4 p-2">
        <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.userID}</td>
      <td className="hidden md:table-cell">{item.tipo}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lightGray">
              <Image src="/delete.png" alt="" width={16} height={16}/>
            </button>
          )}
        </div>
      </td>
    </tr>
  );  

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4'> 
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Todos os usuários</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch/>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brightGreen">
              <Image src="/filter.png" alt="" width={14} height={14}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brightGreen">
              <Image src="/sort.png" alt="" width={14} height={14}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brightGreen">
              <Image src="/plus.png" alt="" width={14} height={14}/>
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* PAGINATION */}
      <Pagination/>
    </div>
  )
}

export default Users