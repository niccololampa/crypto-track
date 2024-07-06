import Link from "next/link";
import { useParams } from "next/navigation";
import cx from "classnames";

export default function Navigation() {
  const { coin } = useParams();

  console.log(coin);
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex m-auto flex-wrap">
          <Link className="ml-1 font-semibold text-xl tracking-tight" href="/">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <svg
                fill="#ffffff"
                height="40px"
                width="40px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 503.607 503.607"
              >
                <g transform="translate(1 1)">
                  <g>
                    <g>
                      <path
                        d="M250.803-1C112.311-1-1,111.472-1,250.803s113.311,251.803,251.803,251.803s251.803-113.311,251.803-251.803
				S389.295-1,250.803-1z M250.803,485.82c-129.259,0-235.016-105.757-235.016-235.016S121.544,15.787,250.803,15.787
				S485.82,121.544,485.82,250.803S380.062,485.82,250.803,485.82z"
                      />
                      <path
                        d="M250.803,32.574c-120.026,0-218.229,98.203-218.229,218.229c0,120.866,98.203,218.23,218.229,218.23
				s218.23-97.364,218.23-218.23C469.033,130.777,370.829,32.574,250.803,32.574z M452.057,242.41h-58.565v-16.787
				c0-5.036-3.357-8.393-8.393-8.393c-5.036,0-8.393,3.357-8.393,8.393v16.787h-50.361v-16.787c0-5.036-3.357-8.393-8.393-8.393
				c-5.036,0-8.393,3.357-8.393,8.393v16.787h-50.361v-50.361h16.787c5.036,0,8.393-3.357,8.393-8.393s-3.357-8.393-8.393-8.393
				h-16.787v-50.361h16.787c5.036,0,8.393-3.357,8.393-8.393s-3.357-8.393-8.393-8.393h-16.787V49.55
				C363.351,53.875,447.731,138.255,452.057,242.41z M242.41,49.55v58.565h-16.787c-5.036,0-8.393,3.357-8.393,8.393
				s3.357,8.393,8.393,8.393h16.787v50.361h-16.787c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h16.787v50.361
				h-50.361v-16.787c0-5.036-3.357-8.393-8.393-8.393s-8.393,3.357-8.393,8.393v16.787h-50.361v-16.787
				c0-5.036-3.357-8.393-8.393-8.393s-8.393,3.357-8.393,8.393v16.787H49.55C53.875,138.255,138.255,53.875,242.41,49.55z
				 M49.55,259.197h58.565v16.787c0,5.036,3.357,8.393,8.393,8.393s8.393-3.357,8.393-8.393v-16.787h50.361v16.787
				c0,5.036,3.357,8.393,8.393,8.393s8.393-3.357,8.393-8.393v-16.787h50.361v50.361h-16.787c-5.036,0-8.393,3.357-8.393,8.393
				c0,5.036,3.357,8.393,8.393,8.393h16.787v50.361h-16.787c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393
				h16.787v58.565C138.255,447.731,53.875,363.351,49.55,259.197z M259.197,452.057v-58.565h16.787c5.036,0,8.393-3.357,8.393-8.393
				c0-5.036-3.357-8.393-8.393-8.393h-16.787v-50.361h16.787c5.036,0,8.393-3.357,8.393-8.393c0-5.036-3.357-8.393-8.393-8.393
				h-16.787v-50.361h50.361v16.787c0,5.036,3.357,8.393,8.393,8.393c5.036,0,8.393-3.357,8.393-8.393v-16.787h50.361v16.787
				c0,5.036,3.357,8.393,8.393,8.393c5.036,0,8.393-3.357,8.393-8.393v-16.787h58.565
				C447.731,363.351,363.351,447.731,259.197,452.057z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <div className="ml-1">CRYPTOTRACK</div>
            </div>
          </Link>
          <div className="flex-grow flex items-center w-auto">
            <div className="text-sm lg:flex-grow">
              <Link
                className={cx(
                  "inline-block mt-0 text-teal-200 mr-4",
                  coin === "bitcoin" ? "text-white" : "text-teal-200"
                )}
                href="/bitcoin"
              >
                <div className="flex">
                  <svg
                    fill="#14b8a6"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12M10 8V12M10 8H8.5M10 8V6.5M14 12H10M14 12C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H10M10 12V16M10 16H8.5M10 16V17.5M13 8V6.5M13 17.5V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke={coin === "bitcoin" ? "#ffffff" : "#99f6e4"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="ml-1">BTC</div>
                </div>
              </Link>

              <Link
                className={cx(
                  "inline-block mt-0 text-teal-200 mr-4",
                  coin === "ethereum" ? "text-white" : "text-teal-200"
                )}
                href="/ethereum"
              >
                <div className="flex">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="#14b8a6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3.20798L6.97874 10.1605L12 12.8643L17.0213 10.1605L12 3.20798ZM11.0272 1.13901C11.5062 0.4758 12.4938 0.475796 12.9728 1.13901L19.1771 9.72952C19.6017 10.3175 19.4118 11.1448 18.7732 11.4887L12.5689 14.8294C12.2138 15.0207 11.7863 15.0207 11.4311 14.8294L5.22683 11.4887C4.58826 11.1448 4.3983 10.3175 4.82294 9.72952L11.0272 1.13901Z"
                      fill={coin === "ethereum" ? "#ffffff" : "#99f6e4"}
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.7098 13.5271C18.8691 12.9474 19.9967 14.3627 19.1728 15.3632L12.9263 22.9482C12.4463 23.5311 11.5537 23.5311 11.0737 22.9482L4.82719 15.3632C4.00325 14.3627 5.13091 12.9474 6.29016 13.5271L12 16.382L17.7098 13.5271ZM16 16.5L12.5367 18.3497C12.1988 18.5186 11.8012 18.5186 11.4633 18.3497L8 16.5L12 20.927L16 16.5Z"
                      fill={coin === "ethereum" ? "#ffffff" : "#99f6e4"}
                    />
                  </svg>
                  <div className="ml-1">ETH</div>
                </div>
              </Link>

              <Link
                className={cx(
                  "inline-block mt-0 text-teal-200  mr-4",
                  coin === "dogecoin" ? "text-white" : "text-teal-200"
                )}
                href="/dogecoin"
              >
                <div className="flex">
                  <svg
                    className="hover:text-white"
                    fill={coin === "dogecoin" ? "#ffffff" : "#99f6e4"}
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.288 7.908h-1.715v3.38h2.697v1.415h-2.697v3.38h1.799c.462 0 3.794.052 3.789-3.933-.005-3.984-3.232-4.242-3.873-4.242zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.472 18.481H8.126v-5.778H6.594v-1.415h1.532V5.511h3.73c.882 0 6.727-.183 6.727 6.594-.001 6.888-6.111 6.376-6.111 6.376z" />
                  </svg>
                  <div className="ml-1">DOGE</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
