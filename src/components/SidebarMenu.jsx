// // import Link

// export default function SideBarMenu({ user, handleLogout }) {
//   return (
//     <>
//       <nav className="flex bg-gray-200 rounded-2xl flex-col justify-start items-start p-5 w-[25%]">
//         <span className="mb-5">
//           <Link to="/">Expenses Tracker</Link>
//         </span>
//         {user ? (
//           <div className="flex flex-col justify-start align-baseline space-y-5">
//             {user && <Link to="/">Dashboard</Link>}
//             {user && <Link to="/expenses">Expenses</Link>}
//             {user && <Link to="/about">About</Link>}

//             <Link to="support">Support</Link>
//             {user && (
//               <form onSubmit={handleLogout}>
//                 <button type="submit">Logout</button>
//               </form>
//             )}
//           </div>
//         ) : (
//           <div className="flex flex-col space-y-7">
//             <Link to="support">Support</Link>
//             <Link to="register">Register</Link>
//             <Link to="login">Login</Link>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }
