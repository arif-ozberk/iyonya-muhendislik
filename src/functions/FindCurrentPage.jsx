// Routes
import { routes } from "../routes/routes";


const appName = "İyonya Mühendsilik | "


export const findCurrentPage = () => {
    const formatString = (str) => {
        const cleaned = str.replace(/[\s\/]/g, '');
        return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    };

    if (location.pathname === "/") {
        document.title = "İyonya Mühendsilik";
        return;
    }

    else {
        // document.title = appName + routes.find((routeItem) => routeItem.routePath === location.routePath).formatString(routePath);
    }
}