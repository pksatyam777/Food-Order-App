import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer class="p-4 bg-gray-800  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 sm:items-center sm:justify-center text-center">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Satyam Singh™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0  sm:items-center sm:justify-center text-center">
        <li>
            <Link to="/" class="mr-4 hover:underline md:mr-6 ">Home</Link>
        </li>
        <li>
            <Link to="/about" class="mr-4 hover:underline md:mr-6">About us</Link>
        </li>
        <li>
            <Link to="/" class="mr-4 hover:underline md:mr-6">Privacy policy</Link>
        </li>
        <li>
            <Link to="/contact" class="hover:underline">Contact</Link>
        </li>
    </ul>
</footer>
  )
}

export default Footer