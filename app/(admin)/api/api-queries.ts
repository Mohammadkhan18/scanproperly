import { AddCompanyType } from "@/app/@types/companyTypes";
import { addComapny, fetchComapny, getSingleComapny } from "./apiServices";
import { useQuery } from "@tanstack/react-query";

export const useAddCompany = async (data: AddCompanyType) => {
  console.log("data_data", data);
  const formdata = new FormData();
  formdata.append("name", data.name);
  formdata.append("url", data.url);
  formdata.append("ceo", data.ceo);
  formdata.append("establishedYear", data.establishedYear);
  formdata.append("country", data.country);
  formdata.append("broker", data.broker);
  formdata.append("platformUse", data.platformUse);
  formdata.append("trustPilotReview", data.trustPilotReview);
  formdata.append("googleReview", data.googleReview);
  formdata.append("paymentMethod", data.paymentMethod);
  formdata.append("payoutMethod", data.payoutMethod);
  formdata.append("minimumPayoutCondition", data.minimumPayoutCondition);
  formdata.append("instrument", data.instrument);
  formdata.append("leverage", data.leverage);
  formdata.append("commission", data.commission);
  formdata.append("demoAccount", data.demoAccount);
  formdata.append("evaluationType", data.evaluationType);
  formdata.append("accountSize", data.accountSize as any);
  formdata.append("actualPrice", data.actualPrice as any);
  formdata.append("discountedPrice", data.discountedPrice);
  formdata.append("profitSplit", data.profitSplit);
  formdata.append("profitTarget", data.profitTarget);
  formdata.append("drawdownResetType", data.drawdownResetType);
  formdata.append("dailyDrawdown", data.dailyDrawdown as any);
  formdata.append("maxDrawdown", data.maxDrawdown as any);
  formdata.append("profitToDrawdownRatio", data.profitToDrawdownRatio);
  formdata.append("countriesServing", data.countriesServing.join(","));
  formdata.append("countriesNotServing", data.countriesNotServing.join(","));
  formdata.append("paymentSettlementDays", data.paymentSettlementDays);
  formdata.append("timeLimit", data.timeLimit);
  formdata.append("minimumTradingDays", data.minimumTradingDays as any);
  formdata.append("newsTrading", data.tradeCopier as any);
  formdata.append("weekendHolding", data.weekendHolding as any);
  formdata.append("expertAdvice", data.expertAdvice as any);
  formdata.append("highFrequencyTrades", data.highFrequencyTrades as any);
  formdata.append("tradeCopier", data.tradeCopier as any);
  formdata.append("firstPayout", data.firstPayout);
  formdata.append("subsequentPayouts", data.subsequentPayouts);
  formdata.append("logo", data.logo[0]);

  try {
    const res = await addComapny(formdata);
    return res;
  } catch (error) {
    return error;
  }
};

export const useFetchCompany = () => {
  return useQuery({
    queryKey: ["companies", "list"],
    queryFn: fetchComapny,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useFetchSingleCompany = (id: string) => {
  return useQuery({
    queryKey: ["single-company", "list"],
    queryFn: getSingleComapny,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
