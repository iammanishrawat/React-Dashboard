import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import { createContext, useContext, useState } from 'react';


const SidebarContext = createContext({
  expanded: false
}) 
export default function SidebarComponent({ children }: any) {
  const [expanded, setExpanded] = useState(true)
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            alt=""
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
          />
          <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{expanded}}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3 items-center">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-3">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text = '', active = false, alert= '' } :any) {
  const {expanded} = useContext(SidebarContext) 
  return (
<li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    > 
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
      {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}></div>}

      {!expanded && (<div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm hidden group-hover:block`}>{text}</div>)}
    </li>
  );
}
