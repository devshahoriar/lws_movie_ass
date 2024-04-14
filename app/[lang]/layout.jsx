import SideBar from "@/components/SideBar"
import { getDictionary } from "@/local/dictionaries"



const layout = async ({ children, params: { lang="en" }, modal }) => {
  const dict = await getDictionary(lang)
  return (
    <>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar dict={dict?.forSideBar} />
        {children}
      </div>
      {modal}
    </>
  )
}

export default layout
