import { useGetDonation } from "@/hooks/donation.hook";
import { Skeleton } from "antd";
import React from "react";
import ListDonation from "../../donation/list-donation";
import ListDonationProgram from "./list-donation-program";
import { useParams } from "next/navigation";

const DonationProgram = () => {
  const { program_id } = useParams();
  const { data, isFetching } = useGetDonation({
    page: 1,
    per_page: 10,
    program_id: program_id as string,
  });

  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Donasi</h4>
      {isFetching ? (
        <Skeleton />
      ) : (
        <ListDonationProgram data={data?.result || []} />
      )}
    </div>
  );
};

export default DonationProgram;
