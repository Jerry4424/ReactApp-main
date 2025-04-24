import NoPage from "./NoPage";

export default function ProtectedRoute({role, children}) {
    if (role !="admin") return <NoPage />;
       
        return <>{children}</>
}