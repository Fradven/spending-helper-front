import {useEffect, useState} from "react";
import Spending from "@/models/entities/Spending";
import {fetchSpendingList} from "@/services/SpendingService";
import SpendingCard from "@/components/cards/SpendingCard";
import {NEXT_API_ROUTE_SPENDING_LIST} from "@/constants";

const SpendingList = () => {
    const [spendingList, setSpendingList] = useState<Spending[]>([]);

    const getSpendingList = async () => {
        const res = await fetch(NEXT_API_ROUTE_SPENDING_LIST);

        if (!res.ok) {
          setSpendingList([]);
      } else {
            const data = await res.json();
          setSpendingList(data);
      }
    }
    useEffect(() => {
        getSpendingList();
    }, []);
    return (
        <section className={"flex gap-2"}>
            <ul className={"flex flex-col gap-1"}>
                {spendingList.length > 0 ? (
                    spendingList.map((spending) => (
                    <SpendingCard spending={spending} />
                ))) : (
                    <h4>Pas de dépense trouvé</h4>
                )}
            </ul>
        </section>
    );
}

export default SpendingList;