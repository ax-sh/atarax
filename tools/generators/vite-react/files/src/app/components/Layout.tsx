// function Layout({ children }) {
//   return <div>{children}</div>;
// }
// export default Layout;
// import React from 'react';
// function Layout({ children, ...props }: React.PropsWithChildren<{}>) {
//   return (
//     <div role={'Layout'} {...props}>
//       {children}
//     </div>
//   );
// }
// export default Layout;

interface LayoutProps {
  role?: string;
}
function Layout({ children, ...props }: React.PropsWithChildren<LayoutProps>) {
  return (
    <div role={'layout'} {...props}>
      {children}
    </div>
  );
}
export default Layout;
