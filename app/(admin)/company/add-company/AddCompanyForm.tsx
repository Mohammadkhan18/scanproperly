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
import { AddCompanyType } from "@/app/@types/companyTypes";
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

import { useAddCompany } from "../../api/api-queries";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUpload from "@/app/components/shared/ImageUpload";

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

const AddCompanyFrom = () => {
  const [selectedEvalutionTypes, setSelectedEvalutionTypes] = useState<any>([]);

  const schema = z.object({
    name: z.string().nonempty("This field is required"),
    url: z.string().nonempty("This field is required").url("Enter a valid url"),
    ceo: z.string().nonempty("This field is required"),
    establishedYear: z.string().nonempty("This field is required"),
    country: z.string().nonempty("This field is required"),
    broker: z.string().nonempty("This field is required"),
    platformUse: z.array(z.string().nonempty("This field is required")),
    trustPilotReview: z.string().nonempty("This field is required"),
    instrument: z.string().nonempty("This field is required"),
    googleReview: z.string().nonempty("This field is required"),
    paymentMethod: z.string().nonempty("This field is required"),
    payoutMethod: z.string().nonempty("This field is required"),
    minimumPayoutCondition: z.string().nonempty("This field is required"),
    leverage: z.string().nonempty("This field is required"),
    commission: z.string().nonempty("This field is required"),
    evaluationType: z.array(z.string().nonempty("This field is required")),
    step1: z.array(z.string()),
    step2: z.array(z.string()),
    step3: z.array(z.string()),
    instantOrFunded: z.array(z.string()),
    accountSize: z.string().nonempty("this fiels is requried"),
    actualPrice: z.string().nonempty("this fiels is requried"),
    demoAccount: z.string().nonempty("This field is required"),
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
      name: "",
      url: "",
      ceo: "",
      establishedYear: "",
      country: "",
      broker: "",
      platformUse: [],
      trustPilotReview: "",
      instrument: "",
      googleReview: "",
      paymentMethod: "",
      payoutMethod: "",
      minimumPayoutCondition: "",
      leverage: "",
      commission: "",
      evaluationType: [],
      step1: [],
      step2: [],
      step3: [],
      instantOrFunded: [],
      accountSize: "",
      actualPrice: 0,
      demoAccount: "",
      discountedPrice: "",
      profitSplit: "",
      profitTarget: "",
      drawdownResetType: "",
      dailyDrawdown: 0,
      maxDrawdown: 0,
      profitToDrawdownRatio: "",
      countriesServing: [],
      countriesNotServing: [],
      paymentSettlementDays: "",
      timeLimit: "",
      minimumTradingDays: 0,
      newsTrading: "false",
      weekendHolding: "false",
      expertAdvice: "false",
      highFrequencyTrades: "false",
      tradeCopier: "false",
      firstPayout: "",
      subsequentPayouts: "",
      logo: "",
    },
    resolver: zodResolver(schema),
  });

  const { mutate } = useAddCompany();

  const handleSubmit = async (values: any) => {
    console.log("values", values);
    // mutate(values);
  };

  return (
    <div>
      <div></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid grid-cols-3 gap-5">
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
                    <Input placeholder="Established Year" {...field} />
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
            />{" "}
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
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Payment Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Credit/Debit Card">
                          Credit/Debit Card
                        </SelectItem>
                        <SelectItem value="Stripe">Stripe</SelectItem>
                        <SelectItem value="Paypal">Paypal</SelectItem>
                        <SelectItem value="Crypto">Crypto</SelectItem>
                        <SelectItem value="Apple Pay">Apple Pay</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payoutMethod"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Payout Method</FormLabel>
                  <FormControl>
                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Payout Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Rise (Bank Transfer)">
                          Rise (Bank Transfer)
                        </SelectItem>
                        <SelectItem value="Crypto">Crypto</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instrument"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Instrument</FormLabel>
                  <FormControl>
                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Instrument" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Forex: USD/GBP">
                          Forex: USD/GB
                        </SelectItem>
                        <SelectItem value="Metals: Steel, copper & others">
                          Metals: Steel, copper & others
                        </SelectItem>
                        <SelectItem value="Indices: NAS10, S&P">
                          Indices: NAS10, S&P
                        </SelectItem>{" "}
                        <SelectItem value="Crypto: BTC, ETH, BCH, SOL">
                          Crypto: BTC, ETH, BCH, SOL
                        </SelectItem>{" "}
                        <SelectItem value="Commodities: ">Oil</SelectItem>{" "}
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
                    <Input placeholder="Minimum Payout Condition" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="leverage"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Leverage</FormLabel>
                  <FormControl>
                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Leverage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Forex - 1:100">
                          Forex - 1:10
                        </SelectItem>
                        <SelectItem value="Metals - 1:33">
                          Metals - 1:33
                        </SelectItem>
                        <SelectItem value="Indices - 1:25">
                          Indices - 1:25
                        </SelectItem>
                        <SelectItem value="Crypto - 1:2">
                          Crypto - 1:2
                        </SelectItem>
                        <SelectItem value="Oil - 1:33">Oil - 1:33</SelectItem>
                        <SelectItem value="Commodities">Commodities</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commission"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Commission</FormLabel>
                  <FormControl>
                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Commission" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Forex- $X Per Round Lot">
                          Forex- $X Per Round Lo
                        </SelectItem>
                        <SelectItem value="Metal- $X Per Round Lot">
                          Metal- $X Per Round Lot
                        </SelectItem>
                        <SelectItem value="Indices- $X Per Round Lot">
                          Indices- $X Per Round Lot
                        </SelectItem>
                        <SelectItem value="Crypto- $X Per Round Lot">
                          Crypto- $X Per Round Lot
                        </SelectItem>
                        <SelectItem value="Oil- $X Per Round Lot">
                          Oil- $X Per Round Lot
                        </SelectItem>
                        <SelectItem value="Commodities- $X Per Round Lot">
                          Commodities- $X Per Round Lot
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                        setSelectedEvalutionTypes(e);
                        // console.log(e);
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
                      <MultiSelect
                        options={evalutionTypeValueArray}
                        selectedValues={value}
                        onSelectedValuesChange={onChange}
                      />
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
                      <MultiSelect
                        options={evalutionTypeValueArray}
                        selectedValues={value}
                        onSelectedValuesChange={onChange}
                      />
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
                      <MultiSelect
                        options={evalutionTypeValueArray}
                        selectedValues={value}
                        onSelectedValuesChange={onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {form.getValues().evaluationType.includes("Instant or Funded") && (
              <FormField
                control={form.control}
                name="instantOrFunded"
                render={({ field: { value, onChange, ...rest } }) => (
                  <FormItem>
                    <FormLabel> Instant or Funded </FormLabel>
                    <FormControl>
                      <MultiSelect
                        options={evalutionTypeValueArray}
                        selectedValues={value}
                        onSelectedValuesChange={onChange}
                      />
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
              name="demoAccount"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel> Demo Account </FormLabel>
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
                    <Input placeholder="Payment Settlement Days " {...field} />
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
          <div className="flex justify-end mt-10">
            {" "}
            <Button type="submit" className="">
              Add Company
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddCompanyFrom;
