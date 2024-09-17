"use client";

import React, { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/app/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { countryListName } from "@/app/constant/countriesData";
import MultiSelect from "@/app/components/ui/multi-select";
import { Button } from "@/app/components/ui/button";

import { useUpdateCompany } from "../../api/api-queries";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUpload from "@/app/components/shared/ImageUpload";
import { useParams } from "next/navigation";

type AddCompanyType = {
  id?: string | string[];
  name: string;
  url: string;
  ceo: string;
  establishedYear: string;
  country: string;
  broker: string;
  platformUse: string[];
  trustPilotReview: string;
  googleReview: string;
  paymentMethod: [];
  payoutMethod: [];
  instrument: [];
  minimumPayoutCondition: string;
  leverage: [];
  commission: [];
  evaluationType: string[];
  step1: string;
  step2: string;
  step3: string;
  accountSize: number | string;
  actualPrice: number | string;
  discountedPrice: string;
  profitSplit: string;
  profitTarget: string;
  drawdownResetType: string;
  dailyDrawdown: number | string;
  maxDrawdown: number | string;
  profitToDrawdownRatio: string;
  countriesServing: string[];
  countriesNotServing: string[];
  paymentSettlementDays: string;
  timeLimit: string;
  minimumTradingDays: number | string;
  newsTrading: string;
  weekendHolding: string;
  expertAdvice: string;
  highFrequencyTrades: string;
  tradeCopier: string;
  firstPayout: string;
  subsequentPayouts: string;
  logo: any;
};

const platformUseArray = [
  { label: "MT4", value: "MT4" },
  { label: "MT5", value: "MT5" },
  { label: "CTrader", value: "CTrader" },
  { label: "DXTrade", value: "DXTrade" },
  { label: "TradeLocker", value: "TradeLocker" },
  { label: "Match Trader", value: "Match Trader" },
  { label: "Think Trader", value: "Think Trader" },
  { label: "Other Platforms", value: "Other Platforms" },
  { label: " Propiertary Platforms", value: " Propiertary Platforms" },
];

const evalutionTypeOption = [
  { label: "Step 1", value: "Step 1" },
  { label: "Step 2", value: "Step 2" },
  { label: "Step 3", value: "Step 3" },
  { label: "Instant or Funded", value: "Instant or Funded" },
];

const evalutionTypeValueArray = [
  { label: "5K", value: "5K" },
  { label: "10K", value: "10K" },
  { label: "15K", value: "15K" },
  { label: "20K", value: "20K" },
  { label: "25K", value: "25K" },
  { label: "30K", value: "30K" },
  { label: "40K", value: "40K" },
  { label: "50K", value: "50K" },
  { label: "60K", value: "60K" },
  { label: "90K", value: "90K" },
  { label: "100K", value: "100K" },
  { label: "120K", value: "120K" },
  { label: "240K", value: "240K" },
  { label: "more", value: "more" },
];

const paymentMethodOptions = [
  { label: "Credit/Debit Card", value: "Credit/Debit Card" },
  { label: "Stripe", value: "Stripe" },
  { label: "Paypal", value: "Paypal" },
  { label: "Crypto", value: "Crypto" },
  { label: "Apple Pay", value: "Apple Pay" },
  { label: "Others", value: "Others" },
];

const payOutMethodOptions = [
  { label: "Rise (Bank Transfer)", value: "Rise (Bank Transfer)" },
  { label: "Crypto", value: "Crypto" },
];

const instrumentOptions = [
  { label: "Forex: USD/GBP", value: "Forex: USD/GBP" },
  {
    label: "Metals: Steel, copper & others",
    value: "Metals: Steel, copper & others",
  },
  { label: "Indices: NAS10, S&P", value: "Indices: NAS10, S&P" },
  { label: "Crypto: BTC, ETH, BCH, SOL", value: "Crypto: BTC, ETH, BCH, SOL" },
  { label: "Commodities: Oil", value: "Commodities: Oil" },
];

const leverageOptions = [
  { label: "Forex - 1:100", value: "Forex - 1:100" },
  { label: "Metals - 1:33", value: "Metals - 1:33" },
  { label: "Indices - 1:25", value: "Indices - 1:25" },
  { label: "Crypto - 1:2", value: "Crypto - 1:2" },
  { label: "Oil - 1:33", value: "Oil - 1:33" },
  { label: "Commodities", value: "Commodities" },
];

const commisionOptions = [
  { label: "Forex- $X Per Round Lot", value: "Forex- $X Per Round Lot" },
  { label: "Metal- $X Per Round Lot", value: "Metal- $X Per Round Lot" },
  { label: "Indices- $X Per Round Lot", value: "Indices- $X Per Round Lot" },
  { label: "Crypto- $X Per Round Lot", value: "Crypto- $X Per Round Lot" },
  { label: "Oil- $X Per Round Lot", value: "Oil- $X Per Round Lot" },
  {
    label: "Commodities- $X Per Round Lot",
    value: "Commodities- $X Per Round Lot",
  },
];

const UpdateCompanyFrom = ({ data }: { data: any }) => {
  const [selectedEvalutionTypes, setSelectedEvalutionTypes] = useState<any>([]);
  const params = useParams();

  const schema = z.object({
    name: z.string().nonempty("This field is required"),
    url: z.string().nonempty("This field is required").url("Enter a valid url"),
    ceo: z.string().nonempty("This field is required"),
    establishedYear: z.string().nonempty("This field is required"),
    country: z.string().nonempty("This field is required"),
    broker: z.string().nonempty("This field is required"),
    platformUse: z.array(z.string().nonempty("This field is required")),
    trustPilotReview: z.string().nonempty("This field is required"),
    instrument: z.array(z.string().nonempty("This field is required")),
    googleReview: z.string().nonempty("This field is required"),
    paymentMethod: z.array(z.string().nonempty("This field is required")),
    payoutMethod: z.array(z.string().nonempty("This field is required")),
    minimumPayoutCondition: z.string().nonempty("This field is required"),
    leverage: z.array(z.string().nonempty("This field is required")),
    commission: z.array(z.string().nonempty("This field is required")),
    evaluationType: z.array(z.string().nonempty("This field is required")),
    step1: z.string(),
    step2: z.string(),
    step3: z.string(),
    accountSize: z.string().nonempty("this fiels is requried"),
    actualPrice: z.string().nonempty("this fiels is requried"),
    discountedPrice: z.string().nonempty("This field is required"),
    profitSplit: z.string().nonempty("This field is required"),
    profitTarget: z.string().nonempty("This field is required"),
    drawdownResetType: z.string().nonempty("This field is required"),
    dailyDrawdown: z.string().nonempty("this fiels is requried"),
    maxDrawdown: z.string().nonempty("this fiels is requried"),
    profitToDrawdownRatio: z.string().nonempty("this fiels is requried"),
    countriesServing: z.array(z.string().nonempty("This field is required")),
    countriesNotServing: z.array(z.string().nonempty("This field is required")),
    paymentSettlementDays: z.string().nonempty("This field is required"),
    timeLimit: z.string().nonempty("This field is required"),
    minimumTradingDays: z.string().nonempty("this fiels is requried"),
    newsTrading: z.string().nonempty("This field is required"),
    weekendHolding: z.string().nonempty("This field is required"),
    expertAdvice: z.string().nonempty("This field is required"),
    highFrequencyTrades: z.string().nonempty("This field is required"),
    tradeCopier: z.string().nonempty("This field is required"),
    firstPayout: z.string().nonempty("This field is required"),
    subsequentPayouts: z.string().nonempty("This field is required"),
    logo: z.any(),
  });

  const form = useForm<AddCompanyType>({
    defaultValues: {
      name: data?.name,
      url: data?.url,
      ceo: data?.ceo,
      establishedYear: `${data?.establishedYear}`,
      country: data?.country,
      broker: data?.name,
      platformUse: data?.platformUse?.[0]?.split(","),
      trustPilotReview: data?.trustPilotReview,
      instrument: data?.instrument?.[0]?.split(","),
      googleReview: data?.googleReview,
      paymentMethod: data?.paymentMethod?.[0]?.split(","),
      payoutMethod: data?.payoutMethod?.[0]?.split(","),
      minimumPayoutCondition: data?.minimumPayoutCondition,
      leverage: data?.leverage?.[0]?.split(","),
      commission: data?.commission?.[0]?.split(","),
      evaluationType: data?.evaluationType?.split(","),
      step1: data?.step_1,
      step2: data?.step_2,
      step3: data?.step_3,
      accountSize: data?.accountSize,
      actualPrice: `${data?.actualPrice}`,
      discountedPrice: `${data?.discountedPrice}`,
      profitSplit: data?.profitSplit,
      profitTarget: data?.profitTarget,
      drawdownResetType: data?.drawdownResetType,
      dailyDrawdown: `${data?.dailyDrawdown}`,
      maxDrawdown: `${data?.maxDrawdown}`,
      profitToDrawdownRatio: data?.profitToDrawdownRatio,
      countriesServing: data?.countriesServing?.[0]?.split(","),
      countriesNotServing: data?.countriesNotServing?.[0]?.split(","),
      paymentSettlementDays: data?.paymentSettlementDays,
      timeLimit: data?.timeLimit,
      minimumTradingDays: `${data?.minimumTradingDays}`,
      newsTrading: `${data?.newsTrading}`,
      weekendHolding: `${data?.weekendHolding}`,
      expertAdvice: `${data?.expertAdvice}`,
      highFrequencyTrades: `${data?.highFrequencyTrades}`,
      tradeCopier: `${data?.tradeCopier}`,
      firstPayout: data?.firstPayout,
      subsequentPayouts: data?.subsequentPayouts,
      logo: "",
    },
    resolver: zodResolver(schema),
  });

  const { mutate } = useUpdateCompany();

  const handleSubmit = async (values: AddCompanyType) => {
    mutate({ ...values, id: params.id });
  };
  return (
    <div>
      <div></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="space-y-5 lg:space-y-10 mt-5 lg:mt-10">
            <div className="border-[0.5px] border-gray-300 rounded-[10px] px-5 py-10 shadow-lg">
              <div className="mb-2">
                <h4 className="text-[16px] font-[500] leading-[20px] lg:text-[20px] lg:leading-[25px]">
                  Company Information
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Url</FormLabel>
                      <FormControl>
                        <Input placeholder="Url" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ceo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEO</FormLabel>
                      <FormControl>
                        <Input placeholder="CEO" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="establishedYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Established Year</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Established Year"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Select onValueChange={onChange} value={value}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countryListName?.map((country) => (
                              <SelectItem value={country.value}>
                                {country.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="broker"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Broker</FormLabel>
                      <FormControl>
                        <Input placeholder="Broker" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="logo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Logo</FormLabel>
                      <FormControl>
                        <ImageUpload {...field} control={form.control} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="border-[0.5px] border-gray-300 rounded-[10px] px-5 py-10 shadow-lg">
              <div className="mb-2">
                <h4 className="text-[16px] font-[500] leading-[20px] lg:text-[20px] lg:leading-[25px]">
                  Trading Platform Used
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="platformUse"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Platform Use</FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={platformUseArray}
                          selectedValues={value}
                          onSelectedValuesChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="border-[0.5px] border-gray-300 rounded-[10px] px-5 py-10 shadow-lg">
              <div className="mb-2">
                <h4 className="text-[16px] font-[500] leading-[20px] lg:text-[20px] lg:leading-[25px]">
                  Reviews
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="trustPilotReview"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trust Pilot Review</FormLabel>
                      <FormControl>
                        <Input placeholder="Trust Pilot Review" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="googleReview"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Google Review</FormLabel>
                      <FormControl>
                        <Input placeholder="Google Review" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="border-[0.5px] border-gray-300 rounded-[10px] px-5 py-10 shadow-lg">
              <div className="mb-2">
                <h4 className="text-[16px] font-[500] leading-[20px] lg:text-[20px] lg:leading-[25px]">
                  Payment & Settlement
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Payment Method</FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={paymentMethodOptions}
                          selectedValues={value}
                          onSelectedValuesChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="payoutMethod"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Payout Method</FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={payOutMethodOptions}
                          selectedValues={value}
                          onSelectedValuesChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstPayout"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>First Payout</FormLabel>
                      <FormControl>
                        <Select onValueChange={onChange} value={value}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="First Payout" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Monthly">Monthly</SelectItem>
                            <SelectItem value="15 Days">15 Days</SelectItem>
                            <SelectItem value="On Demand">On Demand</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="minimumPayoutCondition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Minimum Payout Condition</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Minimum Payout Condition"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subsequentPayouts"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Subsequent Payouts</FormLabel>
                      <FormControl>
                        <Select onValueChange={onChange} value={value}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Subsequent Payouts" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Monthly">Monthly</SelectItem>
                            <SelectItem value="15 Days">15 Days</SelectItem>
                            <SelectItem value="On Demand">On Demand</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="border-[0.5px] border-gray-300 rounded-[10px] px-5 py-10 shadow-lg">
              <div className="mb-2">
                <h4 className="text-[16px] font-[500] leading-[20px] lg:text-[20px] lg:leading-[25px]">
                  Trading Instrument, Leverage & Commision
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="instrument"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Instrument </FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={instrumentOptions}
                          selectedValues={value}
                          onSelectedValuesChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="leverage"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Leverage </FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={leverageOptions}
                          selectedValues={value}
                          onSelectedValuesChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="commission"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Commission </FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={commisionOptions}
                          selectedValues={value}
                          onSelectedValuesChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="border-[0.5px] border-gray-300 rounded-[10px] px-5 py-10 shadow-lg">
              <div className="mb-2">
                <h4 className="text-[16px] font-[500] leading-[20px] lg:text-[20px] lg:leading-[25px]">
                  Account Information
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="evaluationType"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel> Evaluation Type</FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={evalutionTypeOption}
                          selectedValues={value}
                          onSelectedValuesChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                {/* ================================== */}
                {form.getValues().evaluationType.includes("Step 1") && (
                  <FormField
                    control={form.control}
                    name="step1"
                    render={({ field: { value, onChange, ...rest } }) => (
                      <FormItem>
                        <FormLabel>Step 1</FormLabel>
                        <FormControl>
                          <Select onValueChange={onChange} value={value as any}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {evalutionTypeValueArray?.map((opt) => (
                                <SelectItem value={`${opt.value}`}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {form.getValues().evaluationType.includes("Step 2") && (
                  <FormField
                    control={form.control}
                    name="step2"
                    render={({ field: { value, onChange, ...rest } }) => (
                      <FormItem>
                        <FormLabel>Step 2</FormLabel>
                        <FormControl>
                          <Select onValueChange={onChange} value={value as any}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {evalutionTypeValueArray?.map((opt) => (
                                <SelectItem value={`${opt.value}`}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {form.getValues().evaluationType.includes("Step 3") && (
                  <FormField
                    control={form.control}
                    name="step3"
                    render={({ field: { value, onChange, ...rest } }) => (
                      <FormItem>
                        <FormLabel>Step 3</FormLabel>
                        <FormControl>
                          <Select onValueChange={onChange} value={value as any}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {evalutionTypeValueArray?.map((opt) => (
                                <SelectItem value={`${opt.value}`}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {/* ================================== */}
                <FormField
                  control={form.control}
                  name="accountSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Size </FormLabel>
                      <FormControl>
                        <Input placeholder="Account Size " {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="actualPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Actual Price </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Actual Price"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="discountedPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discounted Price </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Discounted Price "
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="profitSplit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profit Split </FormLabel>
                      <FormControl>
                        <Input placeholder="Profit Split " {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="profitTarget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profit Target </FormLabel>
                      <FormControl>
                        <Input placeholder="Profit Target" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="drawdownResetType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Drawdown Reset Type </FormLabel>
                      <FormControl>
                        <Input placeholder="Drawdown Reset Type " {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="dailyDrawdown"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Daily Drawdown </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Daily Drawdown"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="maxDrawdown"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Max Drawdown</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Max Drawdown"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="profitToDrawdownRatio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Profit To Drawdown Ratio</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Profit To Drawdown Ratio"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="countriesServing"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Countries Serving </FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={countryListName}
                          selectedValues={value}
                          onSelectedValuesChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="countriesNotServing"
                  render={({ field: { value, onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Countries Not Serving </FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={countryListName}
                          selectedValues={value}
                          onSelectedValuesChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="paymentSettlementDays"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Settlement Days </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Payment Settlement Days "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="timeLimit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time Limit</FormLabel>
                      <FormControl>
                        <Input placeholder="Time Limit" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="minimumTradingDays"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Minimum Trading Days </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Minimum Trading Days"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="newsTrading"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>News Trading </FormLabel>
                      <FormControl>
                        <Select onValueChange={onChange} value={value as any}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="No" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="true">Yes</SelectItem>
                            <SelectItem value="false">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="expertAdvice"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Expert Advice</FormLabel>
                      <FormControl>
                        <Select onValueChange={onChange} value={value as any}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="No" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="true">Yes</SelectItem>
                            <SelectItem value="false">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="highFrequencyTrades"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>High Frequency Trades</FormLabel>
                      <FormControl>
                        <Select onValueChange={onChange} value={value as any}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="No" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="true">Yes</SelectItem>
                            <SelectItem value="false">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tradeCopier"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Trade Copier</FormLabel>
                      <FormControl>
                        <Select onValueChange={onChange} value={value as any}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="No" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="true">Yes</SelectItem>
                            <SelectItem value="false">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            {" "}
            <Button type="submit" className="">
              Update Company
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdateCompanyFrom;

// export default UpdateCompanyFrom;
