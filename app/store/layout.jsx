import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "DRC Market. - Store Dashboard",
    description: "DRC Market. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
