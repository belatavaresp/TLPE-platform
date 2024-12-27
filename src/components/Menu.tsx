import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Início",
        href: "/",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/teacher.png",
        label: "Professor",
        href: "/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Material",
        href: "/student",
        visible: ["admin", "teacher","student"],
      },
      {
        icon: "/attendance.png",
        label: "Usuários",
        href: "/list/users",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OUTROS",
    items: [
      {
        icon: "/profile.png",
        label: "Perfil",
        href: "/profile",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/setting.png",
        label: "Configurações",
        href: "/settings",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/logout.png",
        label: "Sair",
        href: "/logout",
        visible: ["admin", "teacher", "student"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i)=>(
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
              <Image src={item.icon} alt="" width={20} height={20}/>
              <span className='hidden lg:block'>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;