import Header from "../components/headers/header";
import Sidebar from "../components/sidebar/sidebar";

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <section className="bg-dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <div className="content col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
