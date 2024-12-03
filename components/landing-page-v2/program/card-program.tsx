import BaseButton from "@/components/shared/base-button";
import { formatRupiah } from "@/lib/utils";
import { Progress } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  name: string;
  description?: string;
  imgUrl?: string;
  totalDonation: number;
  target_nominal: number;
  id: string;
}
const CardProgram = (props: Props) => {
  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-2xl bg-slate-800/50 shadow-xl transition-transform ">
      <div className="aspect-video overflow-hidden">
        <img
          // src="/bg-home.jpg"
          src={props.imgUrl}
          alt="Volunteers handling food donations"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold text-white">{props.name}</h2>

        <p className="mb-6 text-slate-400 line-clamp-2">{props.description}</p>

        <div className="mb-4 space-y-2">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Tercapai : {formatRupiah(props.totalDonation)}</span>
            {props.target_nominal && (
              <span>Target : {formatRupiah(props.target_nominal)}</span>
            )}
          </div>

          <Progress showInfo={false} percent={30} strokeColor={"#008080"} />
        </div>

        <BaseButton
          type="primary"
          size="large"
          onClick={() => {
            router.push(`/program/${props.id}`);
          }}
          className="w-full"
        >
          Ikut Donasi
        </BaseButton>
      </div>
    </div>
  );
};

export default CardProgram;
