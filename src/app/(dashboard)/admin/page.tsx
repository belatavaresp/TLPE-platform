import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-8 flex-col md:flex-row'>
      <div className="w-full h-[110px] flex gap-4 justify-between flex-wrap">
        <UserCard type="Alunos"/>
        <UserCard type="Professores"/>
        <UserCard type="Administradores"/>
      </div>
    </div>
  )
}

export default AdminPage