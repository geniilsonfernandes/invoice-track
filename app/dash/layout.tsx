import LogoutButton from "../../components/logout-button";
import { getAuthUser, getUser } from "../actions/user";



export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
 
    const [authUser, user] = await Promise.all([
      await getAuthUser(),
      await getUser(),
    ]);
    

    console.log({ authUser, user }, "Layout");
    

  return (
    <>
      <div>
        {authUser && user ? (
          <span>
            Logado como <strong>{user.email}</strong>
          </span>
        ) : (
          <span>Não logado</span>
        )}
        {authUser?.email}
      </div>
      {children}

      <LogoutButton />
    </>
  );
}
