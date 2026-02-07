import React from 'react'
import { Link } from 'react-router-dom'
export default function Button({name ,onClick, to , className , type="submit" }) {
     return to?(<Link to={to} className={`${className}`}>{name}</Link>):
     <button onClick={onClick} type={type} className={`${className} cursor-pointer transition-all duration-300 `}>{name}</button>
}
