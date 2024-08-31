"use client";

import React from "react";

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

import { Schema, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const AddCompanyFrom = () => {
  const schema = z.object({
    name: z.string().nonempty("This field is required"),
    url: z.string().nonempty("This field is required").url("Enter a valid url"),
    ceo: z.string().nonempty("This field is required"),
    establishedYear: z.string().nonempty("This field is required"),
    country: z.string().nonempty("This field is required"),
    broker: z.string().nonempty("This field is required"),
    platformUse: z.string().nonempty("This field is required"),
    trustPilotReview: z.string().nonempty("This field is required"),
    instrument: z.string().nonempty("This field is required"),
    googleReview: z.string().nonempty("This field is required"),
    paymentMethod: z.string().nonempty("This field is required"),
    payoutMethod: z.string().nonempty("This field is required"),
    minimumPayoutCondition: z.string().nonempty("This field is required"),
    leverage: z.string().nonempty("This field is required"),
    commission: z.string().nonempty("This field is required"),
    evaluationType: z.string().nonempty("This field is required"),
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
    logo: z.string().nonempty("This field is required"),
  });

  const form = useForm<AddCompanyType>({
    defaultValues: {
      name: "",
      url: "",
      ceo: "",
      establishedYear: "",
      country: "",
      broker: "",
      platformUse: "",
      trustPilotReview: "",
      instrument: "",
      googleReview: "",
      paymentMethod: "",
      payoutMethod: "",
      minimumPayoutCondition: "",
      leverage: "",
      commission: "",
      evaluationType: "",
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

  const handleSubmit = async (values: AddCompanyType) => {
    console.log("values", values);
    try {
      const response = await useAddCompany(values);
      console.log("values", response);
    } catch (error) {
      console.log("values", error);
    }
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Platform Use</FormLabel>
                  <FormControl>
                    <Input placeholder="Platform Use" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <Input placeholder="Payment Method" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payoutMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payout Method</FormLabel>
                  <FormControl>
                    <Input placeholder="Payout Method" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instrument"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instrument</FormLabel>
                  <FormControl>
                    <Input placeholder="Instrument " {...field} />
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leverage </FormLabel>
                  <FormControl>
                    <Input placeholder="Leverage" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commission"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commission </FormLabel>
                  <FormControl>
                    <Input placeholder="Commission" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="evaluationType"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Evaluation Type </FormLabel>
                  <FormControl>
                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Evaluation Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1 step">1 step</SelectItem>
                        <SelectItem value="2 step">2 step</SelectItem>
                        <SelectItem value="3 step">3 step</SelectItem>

                        <SelectItem value="Instant or Funded">
                          Instant or Funded
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
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
                  <Input placeholder="Logo" type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
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
