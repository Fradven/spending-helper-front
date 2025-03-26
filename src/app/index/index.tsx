"use client"
import {Button} from "@heroui/react";
import {useState} from "react";

const HomePage = () => {
    const [showList, setShowList] = useState(true);
  return (
      <main>
          <section>
              <h2>Dépenses</h2>
              <div>
                  <Button
                      onPress={() => {setShowList(true)}}
                      className={`${showList ? "" : ""}`}
                  >

                  </Button>
              </div>
          </section>
      </main>
  )
}

export default HomePage;