
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import ItemList from "../../components/ItemList";
import BaseLayout from "../../layout/BaseLayout"

function App() {
  return (
    <>
      <BaseLayout>
        <main>
          <ItemList />
        </main>
      </BaseLayout>
    </>
  )
}


export default Store;