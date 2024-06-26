import Service from "@components/pages/service";
import client from "@lib/api";
import { useQuery } from "@tanstack/react-query";
import { BranduBaseResponse, Inquiry } from "../../types/privacy";
import Head from "next/head";

function ServicePage() {
  const getInquiry = () => {
    return client.get("services/inquiries").then((res) => res.data);
  };

  const { data, isLoading } = useQuery<BranduBaseResponse<Inquiry[]>>(
    ["inquiry"],
    getInquiry
  );

  return (
    <>
      <Head>
        <title>고객센터</title>
      </Head>
      <div className="max-w-4xl m-auto">
        <Service inquiries={data?.results!} />
      </div>
    </>
  );
}
export default ServicePage;
