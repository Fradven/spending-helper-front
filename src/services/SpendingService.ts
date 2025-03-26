import {NEXT_API_ROUTE_SPENDING_LIST} from "@/constants";

export const fetchSpendingList = async () => {
    const res = await fetch(NEXT_API_ROUTE_SPENDING_LIST);

    if (!res.ok) {
        console.error("Backend error:", res.statusText);
        return [];
    }
    return res.json();
}