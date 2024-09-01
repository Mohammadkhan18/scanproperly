"use client";
import { AddCompanyType } from "@/app/@types/companyTypes";
import { api } from "@/app/lib/api-client";
import { useParams } from "next/navigation";

export const addCompany = (data: AddCompanyType) => {
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
  return api.post("/v1/companies", formdata);
};

export const updateCompany = (data: AddCompanyType) => {
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
  return api.post(`/v1/companies/${data.id}`, formdata);
};

export const updateComapny = (id: any) => {
  return api.patch(`/v1/companies/${id}`);
};

export const deleteComapny = (id: any) => {
  return api.delete(`/v1/companies/${id}`);
};

export const fetchComapny = () => {
  return api.get("/v1/companies");
};

export const getSingleComapny = (id: any) => {
  return api.get(`/v1/companies/${id}`);
};

export const addBlog = (data: any) => {
  const formdata = new FormData();
  formdata.append("title", data.title);
  formdata.append("content", data.description);
  formdata.append("image", data.image[0]);
  return api.post("/v1/blogs", formdata);
};

export const updateBlog = (data: any) => {
  const formdata = new FormData();
  formdata.append("title", data.title);
  formdata.append("content", data.description);
  formdata.append("image", data.image[0]);
  return api.patch(`/v1/blogs/${data.id}`, formdata);
};

export const fetchBlogs = () => {
  return api.get("/v1/blogs");
};

export const fetchSingleBlog = async (id: any) => {
  const response = await api.get(`/v1/blogs/${id}`);
  return response.data;
};

export const deleteBlogs = (id: string) => {
  return api.delete(`/v1/blogs/${id}`);
};
