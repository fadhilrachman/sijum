import { useRouter } from "next/navigation";

export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(value);
};
export const handleBack = () => {
  const router = useRouter();
  router.back();
};
