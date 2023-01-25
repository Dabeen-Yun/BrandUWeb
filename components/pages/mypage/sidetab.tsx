import { useState } from "react";
import Link from "next/link";

interface tabProps {
  num: number;
  setStateNums?: any;
}

function SideTab({ num, setStateNums }: tabProps) {
  const [tabNum, setTabNum] = useState<number>(num ?? 0);
  const [stateNum, setStateNum] = useState<number>(0);
  return (
    <div className="border border-main rounded-xl p-5 w-fit h-fit">
      <span className="font-bold text-base">주문/배송</span>
      <Link href={"/mypage"}>
        <div
          className={`text-sm my-2 ${tabNum == 0 && "text-main font-bold"}`}
          onClick={() => {
            setTabNum(0);
            setStateNum(0);
          }}
        >
          주문/배송조회
        </div>
      </Link>
      {tabNum == 0 && (
        <div className="flex flex-col space-y-2 ml-2 text-sm text-subContent">
          <span
            className={`${stateNum == 0 && "text-main font-bold"}`}
            onClick={() => {
              setStateNum(0);
              setStateNums("전체");
            }}
          >
            전체
          </span>
          <span
            className={`${stateNum == 1 && "text-main font-bold"}`}
            onClick={() => {
              setStateNum(1);
              setStateNums("결제 대기");
            }}
          >
            결제대기
          </span>
          <span
            className={`${stateNum == 2 && "text-main font-bold"}`}
            onClick={() => {
              setStateNum(2);
              setStateNums("결제 완료");
            }}
          >
            결제완료
          </span>
          <span
            className={`${stateNum == 3 && "text-main font-bold"}`}
            onClick={() => {
              setStateNum(3);
              setStateNums("배송 중");
            }}
          >
            배송 중
          </span>
          <span
            className={`${stateNum == 4 && "text-main font-bold"}`}
            onClick={() => {
              setStateNum(4);
              setStateNums("배송 완료");
            }}
          >
            배송완료
          </span>
        </div>
      )}

      <Link href={"/mypage/cancel"}>
        <div
          className={`text-sm my-2 ${tabNum == 1 && "text-main font-bold"}`}
          onClick={() => {
            setTabNum(1);
            setStateNum(0);
          }}
        >
          취소/교환/환불 내역
        </div>
      </Link>
      <Link href={"/mypage/review"}>
        <div
          className={`text-sm my-2 ${tabNum == 2 && "text-main font-bold"}`}
          onClick={() => {
            setTabNum(2);
            setStateNum(0);
          }}
        >
          리뷰관리
        </div>
      </Link>
      <Link href={"/mypage/address"}>
        <div
          className={`text-sm my-2 ${tabNum == 3 && "text-main font-bold"}`}
          onClick={() => {
            setTabNum(3);
            setStateNum(0);
          }}
        >
          배송지 관리
        </div>
      </Link>
      <div className="border-b my-5 " />
      <span className="font-bold text-base">마이페이지</span>

      <Link href={"/mypage/coupon"}>
        <div
          className={`text-sm my-2 ${tabNum == 4 && "text-main font-bold"}`}
          onClick={() => {
            setTabNum(4);
            setStateNum(0);
          }}
        >
          쿠폰
        </div>
      </Link>
      <Link href={"/mypage/point"}>
        <div
          className={`text-sm my-2 ${tabNum == 5 && "text-main font-bold"}`}
          onClick={() => {
            setTabNum(5);
            setStateNum(0);
          }}
        >
          포인트
        </div>
      </Link>
      <Link href={"/mypage/profile"}>
        <div
          className={`text-sm my-2 ${tabNum == 6 && "text-main font-bold"}`}
          onClick={() => {
            setTabNum(6);
            setStateNum(0);
          }}
        >
          개인정보 수정
        </div>
      </Link>
    </div>
  );
}

export default SideTab;
