"use client";

import { api } from "../../lib/api-client";

export const addCompany = (data: any) => {
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
  data.evaluationType.includes("Step 1") &&
    formdata.append("step_1", data.step1);
  data.evaluationType.includes("Step 2") &&
    formdata.append("step_2", data.step2);
  data.evaluationType.includes("Step 3") &&
    formdata.append("step_3", data.step3);
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

export const updateCompany = (data: any) => {
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
  data.evaluationType.includes("Step 1") &&
    formdata.append("step_1", data.step1);
  data.evaluationType.includes("Step 2") &&
    formdata.append("step_2", data.step2);
  data.evaluationType.includes("Step 3") &&
    formdata.append("step_3", data.step3);
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
  formdata.append("content", data.content);
  formdata.append("image", data.image[0]);
  formdata.append("metaKeywords", data.metakeyword);
  formdata.append("metaRobots", data.robotsKeyword);
  formdata.append("metaTitle", data.metaTitle);
  formdata.append("metaDescription", data.metaDescription);
  formdata.append("anchorTexting", data.anchorTexting);
  formdata.append("internalLinking", data.internalLinking);
  formdata.append("urlEditing", data.urlEditing);
  formdata.append("xmlSiteMap", data.xmlSitemap);
  formdata.append("schemaMetaData", data.schemaMetaData);
  formdata.append("favicon", data.favicon[0]);
  formdata.append("canonicalUrl", data.canonicalUrl);
  formdata.append("openGraph", data.openGraph);
  formdata.append("altImageAttributes", data.altImageAttributes);

  return api.post("/v1/blogs", formdata);
};

export const updateBlog = (data: any) => {
  const formdata = new FormData();
  formdata.append("title", data.title);
  formdata.append("content", data.description);
  formdata.append("image", data.image[0]);
  formdata.append("metaKeywords", data.metakeyword);
  formdata.append("metaRobots", data.robotsKeyword);
  formdata.append("metaTitle", data.metaTitle);
  formdata.append("metaDescription", data.metaDescription);
  formdata.append("anchorTexting", data.anchorTexting);
  formdata.append("internalLinking", data.internalLinking);
  formdata.append("urlEditing", data.urlEditing);
  formdata.append("xmlSiteMap", data.xmlSitemap);
  formdata.append("schemaMetaData", data.schemaMetaData);
  formdata.append("favicon", data.favicon[0]);
  formdata.append("canonicalUrl", data.canonicalUrl);
  formdata.append("openGraph", data.openGraph);
  formdata.append("altImageAttributes", data.altImageAttributes);
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
