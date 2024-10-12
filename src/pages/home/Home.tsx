import Header from "@/components/header";
import ProfileCard from "./card";

const Homepage = () => (
    <>
    <Header />
        <div className="polka-dots bg-1000 dark:bg-background flex w-full flex-col h-[95vh] overflow-scroll items-center font-mono">
        <ProfileCard />
        </div>
    </>
);

export default Homepage;