import react from "react";

// Component
import Home from "@/components/organisms/Home";

// Styles
import classes from "./page.module.css";

const HomePage = () => {
    return (
        <div className={classes["container"]}>
            <Home />
        </div>
    );
};

export default HomePage;
