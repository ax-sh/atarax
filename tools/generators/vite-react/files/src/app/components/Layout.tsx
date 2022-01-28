function Layout({ children }) {
  return <div>{children}</div>;
}
export default Layout;
// import React from 'react';
// function Layout({ children, ...props }: React.PropsWithChildren<{}>) {
//   return (
//     <div role={'Layout'} {...props}>
//       {children}
//     </div>
//   );
// }
// export default Layout;
