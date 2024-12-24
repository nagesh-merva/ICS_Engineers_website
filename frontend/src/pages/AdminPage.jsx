import SidePanel from "../components/Admin/sidepanel/SidePanel"
import ServicesPage from "../components/Admin/services/ServicesPage"

function AdminPage() {
    return (
        <div className="w-full h-auto min-w-[1000px]">
            <SidePanel />
            <ServicesPage />
        </div>
    )
}

export default AdminPage