"use client"
import {useState} from "react";
import Image from "next/image";
import {Button} from "@heroui/react";
import SpendingList from "@/components/sections/lists/SpendingList";

const HomePage = () => {
    const [showList, setShowList] = useState(true);
    return (
        <main>
            <section className={"p-[24px] flex items-center justify-between"}>
                <h2 className={"font-bold text-[32px] md:text-[40px]"}>Dépenses</h2>
                <div className={"flex gap-2"}>
                    <Button
                        onPress={() => {
                            setShowList(true)
                        }}
                        className={`${showList ? "bg-trustupYellow" : ""}`}
                        color={"warning"}
                    >
                      <span>
                          <Image
                              src={"/images/icons/hamburger_menu.svg"}
                              alt={"hamburger menu icon"}
                              width={24}
                              height={18}
                          />
                          Liste
                      </span>
                    </Button>
                    <Button
                        onPress={() => {
                            setShowList(false)
                        }}
                        className={`${!showList ? "bg-trustupYellow" : ""}`}
                        color={"warning"}
                    >
                      <span>
                          <Image
                              src={"/images/icons/hamburger_menu.svg"}
                              alt={"hamburger menu icon"}
                              width={24}
                              height={18}
                          />
                          Statistiques
                      </span>
                    </Button>
                </div>
            </section>
            <section>
                <SpendingList />
            </section>
        </main>
    )
}

export default HomePage;