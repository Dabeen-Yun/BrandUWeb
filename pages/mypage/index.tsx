import TopInfo from "@components/pages/mypage/topinfo";
import SideTab from "../../components/pages/mypage/sidetab";
import PayInfo from "@components/pages/mypage/payinfo";
import Head from "next/head";
import { useState } from "react";

function MyOrder() {
  const [orderState, setOrderState] = useState<string>("전체");
  return (
    <>
      <Head>
        <title>주문/배송조회</title>
      </Head>
      <div className=" m-auto">
        <TopInfo />
        <div className="max-w-4xl m-auto">
          <div className="flex flex-row">
            <SideTab num={0} setStateNums={setOrderState} />
            <PayInfo order={orderState} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrder;
