function Layout({ children, ...props }: React.PropsWithChildren<{}>) {
  return (
    <div role={'Layout'} {...props}>
      {children}
    </div>
  );
}
export default Layout;
