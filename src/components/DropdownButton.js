import React, { useState, useRef, useEffect } from 'react';
import './DropdownButton.css'; // Make sure to import the CSS file

const DropdownButton = ({ items, name }) => {
 const [isOpen, setIsOpen] = useState(false);
 const dropdownRef = useRef(null);

 const toggleDropdown = () => setIsOpen(!isOpen);

 const handleClickOutside = (event) => {
   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
     setIsOpen(false);
   }
 };

 useEffect(() => {
   if (isOpen) {
     document.addEventListener('click', handleClickOutside);
   }
   return () => {
     document.removeEventListener('click', handleClickOutside);
   };
 }, [isOpen]);

 return (
   <div className="dropdown" ref={dropdownRef}>
     <button className="dropdown-toggle" onClick={toggleDropdown}>
       {name}
     </button>
     {isOpen && (
       <ul className="dropdown-menu">
         {items.map((item, index) => (
           <li className="dropdown-item" key={index}>
             <a href={item.link}>
               <p>{item.name}</p>
             </a>
           </li>
         ))}
       </ul>
     )}
   </div>
 );
};

export default DropdownButton;