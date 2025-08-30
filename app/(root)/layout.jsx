import NavBar from "@/components/NavBar";


export default function Layout({ children }) {
  return (
    <main className="text-2xl">
      <NavBar/>
      {children}
    </main>
  )
}
