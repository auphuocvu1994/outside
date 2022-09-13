import { Collapse as CollapseMantine, Image } from "@mantine/core";
import { getData, obj } from "api/api";
import Footer from "components/Footer/Footer";
import fsPromises from "fs/promises";
import { ArrowDown2 } from "iconsax-react";
import { LooseObject } from "interfaces";
import type { GetServerSideProps, NextPage } from "next";
import path from "path";
import React, { useState } from "react";
import style from "./style.module.css";

type StatisticProps = {
  data: LooseObject;
};

// ---- Call API ----
export const getServerSideProps: GetServerSideProps = async (context) => {
  const filePath = path.join(process.cwd(), "src/json/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  const response = await getData();
  if (response) {
    return { props: { data: response?.data || {} } };
  } else {
    return { props: { data: objectData } };
  }
};

const Statistic: NextPage<StatisticProps> = ({
  data = { text: "Statistic" },
}) => {
  const [allOpen, setAllOpen] = useState(true);
  const dataStatistic = data[obj]?.key_statistics;
  const ExpandAll = () => {};
  return (
    <React.Fragment>
      <main>
        <div className={`${style.Statistic}`}>
          <div className={`${style.ExpandAll}`}>
            <div>{data[obj]?.profile.currency}</div>
            <div onClick={ExpandAll} className={`${style.flex}`}>
              <Image
                src="/Group.png"
                width={12}
                height={12}
                style={{ marginRight: "10px" }}
              />
              <div>Expand All</div>
            </div>
          </div>
          <div>
            <Collapse
              title="Valuation Measures"
              arrow={true}
              style={`${style.headerdrop} ${style.bgorther} ${style.paddingHeader}`}
            >
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop}`}
              >
                <div>Market Cap (intraday)</div>
                <div>
                  {dataStatistic.valuation_measures.market_cap_intraday}
                </div>
              </div>
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop} ${style.bgorther}`}
              >
                <div>Enterprise Value</div>
                <div>{dataStatistic.valuation_measures.enterprise_value}</div>
              </div>
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop}`}
              >
                <div>Trailing P/E</div>
                <div>{dataStatistic.valuation_measures.trailing_pe}</div>
              </div>
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop} ${style.bgorther}`}
              >
                <div>Forward P/E</div>
                <div>{dataStatistic.valuation_measures.forward_pe}</div>
              </div>
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop}`}
              >
                <div>PEG Ratio (5 yr expected)</div>
                <div>
                  {dataStatistic.valuation_measures.peg_ratio5_yr_expected}
                </div>
              </div>
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop} ${style.bgorther}`}
              >
                <div>Price/Sales (ttm)</div>
                <div>{dataStatistic.valuation_measures.price_sales_ttm}</div>
              </div>
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop}`}
              >
                <div>Price/Book (mrq)</div>
                <div>{dataStatistic.valuation_measures.price_book_mrq}</div>
              </div>
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop} ${style.bgorther}`}
              >
                <div>Enterprise Value/Revenue</div>
                <div>
                  {dataStatistic.valuation_measures.enterprise_value_revenue}
                </div>
              </div>
              <div
                className={`${style.flex} ${style.padding} ${style.vlauedrop} `}
              >
                <div>Enterprise Value/EBITDA</div>
                <div>
                  {dataStatistic.valuation_measures.enterprise_value_ebitda}
                </div>
              </div>
            </Collapse>
          </div>
          <div>
            <Collapse
              title="Financial Highlights"
              arrow={true}
              style={`${style.headerdrop} ${style.bgorther} ${style.paddingHeader}`}
            >
              <div>
                <Collapse
                  title="Fiscal Year"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Fiscal Year Ends</div>
                    <div>{dataStatistic.fiscal_year.fiscal_year_ends}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Most Recent Quarter (mrq)</div>
                    <div>
                      {dataStatistic.fiscal_year.most_recent_quarter_mrq}
                    </div>
                  </div>
                </Collapse>
              </div>
              <div>
                <Collapse
                  title="Profitability"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Profit Margin</div>
                    <div>{dataStatistic.profitability.profit_margin}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Operating Margin (ttm)</div>
                    <div>
                      {dataStatistic.profitability.operating_margin_ttm}
                    </div>
                  </div>
                </Collapse>
              </div>
              <div>
                <Collapse
                  title="Management Effectiveness"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Return on Assets (ttm)</div>
                    <div>
                      {
                        dataStatistic.management_effectiveness
                          .return_on_assets_ttm
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Return on Equity (ttm)</div>
                    <div>
                      {
                        dataStatistic.management_effectiveness
                          .return_on_equity_ttm
                      }
                    </div>
                  </div>
                </Collapse>
              </div>
              <div>
                <Collapse
                  title="Income Statement"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Revenue (ttm)</div>
                    <div>{dataStatistic.income_statement.revenue_ttm}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Revenue Per Share (ttm)</div>
                    <div>
                      {dataStatistic.income_statement.revenue_per_share_ttm}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Quarterly Revenue Growth (yoy)</div>
                    <div>
                      {
                        dataStatistic.income_statement
                          .quarterly_revenue_growth_yoy
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Gross Profit (ttm)</div>
                    <div>{dataStatistic.income_statement.gross_profit_ttm}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>EBITDA</div>
                    <div>{dataStatistic.income_statement.ebitda}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Net Income Avi to Common (ttm)</div>
                    <div>
                      {
                        dataStatistic.income_statement
                          .net_income_avi_to_common_ttm
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Diluted EPS (ttm)</div>
                    <div>{dataStatistic.income_statement.diluted_eps_ttm}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Quarterly Earnings Growth (yoy)</div>
                    <div>
                      {
                        dataStatistic.income_statement
                          .quarterly_earnings_growth_yoy
                      }
                    </div>
                  </div>
                </Collapse>
              </div>
              <div>
                <Collapse
                  title="Balance Sheet"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Total Cash (mrq)</div>
                    <div>{dataStatistic.balance_sheet.total_cash_mrq}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Total Cash Per Share (mrq)</div>
                    <div>
                      {dataStatistic.balance_sheet.total_cash_per_share_mrq}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Total Debt (mrq)</div>
                    <div>{dataStatistic.balance_sheet.total_debt_mrq}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Total Debt/Equity (mrq)</div>
                    <div>
                      {dataStatistic.balance_sheet.total_debt_equity_mrq}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Current Ratio (mrq)</div>
                    <div>{dataStatistic.balance_sheet.current_ratio_mrq}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Book Value Per Share (mrq)</div>
                    <div>
                      {dataStatistic.balance_sheet.book_value_per_share_mrq}
                    </div>
                  </div>
                </Collapse>
              </div>
              <div>
                <Collapse
                  title="Cash Flow Statement"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Operating Cash Flow (ttm)</div>
                    <div>
                      {
                        dataStatistic.cash_flow_statement
                          .operating_cash_flow_ttm
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Levered Free Cash Flow (ttm)</div>
                    <div>
                      {
                        dataStatistic.cash_flow_statement
                          .levered_free_cash_flow_ttm
                      }
                    </div>
                  </div>
                </Collapse>
              </div>
            </Collapse>
          </div>
          <div>
            <Collapse
              title="Trading Information"
              arrow={true}
              style={`${style.headerdrop} ${style.bgorther} ${style.paddingHeader}`}
            >
              <div>
                <Collapse
                  title="Stock Price History"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Beta (5Y Monthly)</div>
                    <div>
                      {dataStatistic.stock_price_history.beta5_y_monthly}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>52-Week Change</div>
                    <div>{dataStatistic.stock_price_history.week_change3}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>S&P500 52-Week Change</div>
                    <div>
                      {dataStatistic.stock_price_history.sp500_52week_change3}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>52 Week High</div>
                    <div>{dataStatistic.stock_price_history.week_high3}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>52 Week Low </div>
                    <div>{dataStatistic.stock_price_history.week_low3}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>50-Day Moving Average</div>
                    <div>
                      {dataStatistic.stock_price_history.day_moving_average3}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>200-Day Moving Average</div>
                    <div>
                      {dataStatistic.stock_price_history.day200_moving_average3}
                    </div>
                  </div>
                </Collapse>
              </div>
              <div>
                <Collapse
                  title="Share Statistics"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Avg Vol (3 month)</div>
                    <div>{dataStatistic.share_statistics.avg_vol3_month3}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Avg Vol (10 day)</div>
                    <div>{dataStatistic.share_statistics.avg_vol10_day3}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Shares Outstanding</div>
                    <div>
                      {dataStatistic.share_statistics.shares_outstanding5}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Implied Shares Outstanding</div>
                    <div>
                      {
                        dataStatistic.share_statistics
                          .implied_shares_outstanding6
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Float</div>
                    <div>{dataStatistic.share_statistics.float8}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>% Held by Insiders</div>
                    <div>
                      {dataStatistic.share_statistics.held_by_insiders1}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>% Held by Institutions</div>
                    <div>
                      {dataStatistic.share_statistics.held_by_institutions1}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Shares Short</div>
                    <div>{dataStatistic.share_statistics.shares_short4}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Short Ratio</div>
                    <div>{dataStatistic.share_statistics.short_ratio4}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Short % of Float</div>
                    <div>{dataStatistic.share_statistics.short_of_float4}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Short % of Shares Outstanding</div>
                    <div>
                      {
                        dataStatistic.share_statistics
                          .implied_shares_outstanding6
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Shares Short (prior month )</div>
                    <div>{dataStatistic.share_statistics.shares_short4}</div>
                  </div>
                </Collapse>
              </div>
              <div>
                <Collapse
                  title="Dividends & Splits"
                  arrow={true}
                  style={`${style.headerdrop} ${style.bgorther} ${style.paddingLeft} ${style.paddingHeader}`}
                >
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Forward Annual Dividend Rate</div>
                    <div>
                      {
                        dataStatistic.dividends_splits
                          .forward_annual_dividend_rate4
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Forward Annual Dividend Yield</div>
                    <div>
                      {
                        dataStatistic.dividends_splits
                          .forward_annual_dividend_yield4
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Trailing Annual Dividend Rate</div>
                    <div>
                      {
                        dataStatistic.dividends_splits
                          .trailing_annual_dividend_rate3
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Trailing Annual Dividend Yield</div>
                    <div>
                      {
                        dataStatistic.dividends_splits
                          .trailing_annual_dividend_yield3
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>5 Year Average Dividend Yield</div>
                    <div>
                      {
                        dataStatistic.dividends_splits
                          .year_average_dividend_yield4
                      }
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Payout Ratio</div>
                    <div>{dataStatistic.dividends_splits.payout_ratio4}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Dividend Date</div>
                    <div>{dataStatistic.dividends_splits.dividend_date3}</div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Ex-Dividend Date</div>
                    <div>
                      {dataStatistic.dividends_splits.ex_dividend_date4}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop}`}
                  >
                    <div>Last Split Factor</div>
                    <div>
                      {dataStatistic.dividends_splits.last_split_factor2}
                    </div>
                  </div>
                  <div
                    className={`${style.flex} ${style.padding} ${style.paddingLeft} ${style.vlauedrop} ${style.bgorther}`}
                  >
                    <div>Last Split Date</div>
                    <div>{dataStatistic.dividends_splits.last_split_date3}</div>
                  </div>
                </Collapse>
              </div>
            </Collapse>
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

type CollapseProps = {
  children: any;
  title: string;
  link?: string;
  namelink?: string;
  style?: string;
  opened?: boolean;
  icon?: string;
  arrow?: boolean;
  styleTitle?: string;
};
export const Collapse = ({
  children,
  title,
  link,
  namelink,
  style = "",
  opened,
  icon,
  arrow,
  styleTitle,
}: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(opened || false);
  return (
    <div>
      <div
        className={` ${style}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {arrow === true ? (
          <div
          // className="transition-all"
          // style={
          //   isOpen
          //     ? { transform: "rotate(180deg)" }
          //     : { transform: "rotate(0)" }
          // }
          >
            <ArrowDown2
              size={18}
              color="currentColor"
              style={{ color: "#017efa" }}
            />
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <Image src={icon} /> <span>{title} </span>{" "}
        </div>
      </div>

      <CollapseMantine in={isOpen}>{children}</CollapseMantine>
    </div>
  );
};

export default Statistic;
