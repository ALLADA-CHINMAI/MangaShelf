import React, { useEffect, useState } from 'react';
import SortDropdown from '../dropdown';
import Logo from '../logo';
import { SendSortFieldProps } from 'SRC/types/interfaces';


const NavItems: React.FC<SendSortFieldProps> = ({ sendData }) => {

  const [sortField, setSortField] = useState<string>("");

  const handleSortFieldData = (field: string) => {
    setSortField(field);
  };

  useEffect(() => {
    sendData(sortField);
  }, [sortField])

  return (
    <div className={`bg-white  fixed top-0 w-full z-15 p-2 ${sortField ? 'shadow-md':' '}`} >
      <div className="flex justify-between ml-4 mr-4 ">
        <Logo />

        <nav className="self-center z-10">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                <SortDropdown sendData={handleSortFieldData} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Favorites</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Saved</a>
            </li>
          </ul>
        </nav>
      </div>

    </div>


  );
};

export default NavItems;

