import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface DataState {
  address: string;
  Balance: string | null;
}
const Navbar: React.FC = () => {
  const [data, setdata] = useState<DataState>({
    address: "",
    Balance: null,
  });
  const [url, setUrl] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.pathname);
    }
  }, []);
  const [isConnected, setIsConnected] = useState(false);

  const btnhandler = async () => {
    //@ts-ignore

    if (window.ethereum) {
      try {
        //@ts-ignore

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountChangeHandler(accounts[0]);
      } catch (error) {
        console.error("Error requesting accounts:", error);
      }
    } else {
      alert("Install MetaMask extension!!");
    }
  };

  const getbalance = async (address: string) => {
    try {
      //@ts-ignore

      const balance = await provider.getBalance(address);
      setdata((prevData) => ({
        ...prevData,
        //@ts-ignore

        Balance: ethers.utils.formatEther(balance),
      }));
    } catch (error) {
      console.error("Error getting balance:", error);
    }
  };

  const accountChangeHandler = (account: string) => {
    setdata({
      address: account,
      Balance: null,
    });

    getbalance(account);
  };

  const disconnectHandler = () => {
    //@ts-ignore

    if (window.ethereum && window.ethereum.close) {
      //@ts-ignore

      window.ethereum.close();
      setIsConnected(false);
      setdata({
        address: "",
        Balance: null,
      });
    }
  };

  useEffect(() => {
    //@ts-ignore
    if (window.ethereum) {
      //@ts-ignore
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          accountChangeHandler(accounts[0]);
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      });
    }
  }, []);
  console.log(data, "dddddatatatta");
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg nav-trans-bdr">
          <div className="container">
            <a
              className="navbar-brand"
              onClick={() => router.push("/")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <img
                alt="logo"
                loading="lazy"
                src="./logo.svg"
                className="img-logo"
              />
            </a>

            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a
                    className={
                      url && url === "/" ? "nav-link active" : "nav-link"
                    }
                    onClick={() => router.push("/")}
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      url && url === "/buy" ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    onClick={() => router.push("/buy")}
                    style={{ cursor: "pointer" }}
                  >
                    Buy
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      url && url === "/claim" ? "nav-link active" : "nav-link"
                    }
                    onClick={() => router.push("/claim")}
                    style={{ cursor: "pointer" }}
                  >
                    Claim
                  </a>
                </li>
              </ul>
              {/* <div className="form-flex gap-2">
              <select name="cars" id="cars" className="form-select">
                <option value="disabled" disabled selected>
                  Select an option
                </option>
                <option value="All">All</option>
                <option value="Sports Cars">Sports Cars</option>
                <option value="Classic Cars">Classic Cars</option>
                <option value="Limited Edition">Limited Edition</option>
                <option value="Concept Cars">Concept Cars</option>
              </select> 
                 <input type="text" id="searchInput" placeholder="Search..." className="form-control" /> 
              </div> */}

              <div className="vs-mb">
                {data.address ? (
                  <span style={{ color: "#21997f" }}>
                    {data.address.slice(0, 5)}....
                    {data.address.slice(33, data.address.length)}
                  </span>
                ) : (
                  <button
                    className="btn btn-primary btn-connect m-pos-chng-btn"
                    type="button"
                    onClick={btnhandler}
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </div>
            <div className="button-pos ms-auto">
              {" "}
              <div className="vs-lg">
                {" "}
                {data.address ? (
                  <span style={{ color: "#21997f" }}>
                    {data.address.slice(0, 5)}....
                    {data.address.slice(33, data.address.length)}
                  </span>
                ) : (
                  <button
                    className="btn btn-primary btn-connect m-pos-chng-btn"
                    type="button"
                    onClick={btnhandler}
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
              {/* <div className="avatar-container">
                <img
                  src="./profile.png"
                  alt="Your Avatar"
                  className="avatar-image"
                />
              </div> */}
              <button
                className="navbar-toggler ms-auto pos-right"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
