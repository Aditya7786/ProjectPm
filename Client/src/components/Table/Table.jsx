import { useEffect, useState } from "react";
import Searchsvg from "../../assets/material-symbols_search.svg";
import { PiNotePencilBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { format } from "date-fns";
import Loding from "../Loding/Loding";
import "../Home.css";
import { Link } from "react-router-dom";

const Table = () => {
  const [valueinput, setvalueinput] = useState("");
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteCustomerId, setDeleteCustomerId] = useState(null);

  const deletedAt = async () => {
    if (deleteId) {
      await axios.delete(
        `https://project-rof.vercel.app/api/customers/delete/${deleteId}`
      );
      fetchData(); // Refresh data after deletion
      setShowPopup(false); // Hide popup after deletion
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://project-rof.vercel.app/api/customers/fetch-all`
    );
    setdata(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Data Time
  const DateupdatedAt = (DateupdatedAt) => {
    const formattedDate = format(new Date(DateupdatedAt), "dd MMM | hh:mm a");
    return formattedDate;
  };

  const ResponseAt = (DateupdatedAt) => {
    const formattedDate = format(new Date(DateupdatedAt), "hh:mm a");
    return formattedDate;
  };

  return (
    <div className="arrowss">
      {loading ? (
        <Loding />
      ) : (
        <div
          style={{ gap: "10px" }}
          className="Tab3 p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg h-screen;
 ">
          {/* bg: #F7F3E8 */}
          <div
            style={{ gap: "20px", paddingLeft: "0px" }}
            className="p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg;
 ">
            <h1
              className="font-bold flex items-center gap-1"
              style={{
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: "500",
              }}>
              Home
              <IoIosArrowForward style={{ color: "#1C1B1F" }} />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
                className="font-medium">
                Direct Visitors
              </span>
            </h1>

            <div className="flex flex-row items-center justify-start flex items-center justify-center ml-80">
              <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full  mr-96 ">
                <input
                  className="w-full py-2 px-12 rounded-full "
                  style={{
                    border: "1px solid #3D2314",
                    boxShadow: " 0px 0px 4px 0px #00000040",
                  }}
                  type="text"
                  value={valueinput}
                  onChange={(e) => setvalueinput(e.target.value)}
                  placeholder="Search"
                />
                <img
                  style={{ top: "0.6rem" }}
                  src={Searchsvg}
                  alt="Search"
                  className="absolute  left-4"
                />
              </div>
            </div>
          </div>
          <div className="outer-wrapper">
            <div className="table-wrapper">
              {data.length !== 0 ? (
                <table
                  className="min-w-full bg-white"
                  style={{ boxShadow: " 0px 0px 4px 0px #00000040" }}>
                  <thead>
                    <tr className="text-[9px] lg:text-[15px] text-left  bg-[#E8E8E8]">
                      <th
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "left",
                          paddingLeft: "7px",
                          width: "115px",
                          padding: "5px",
                        }}>
                        Date
                      </th>
                      <th
                        className="text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                        }}>
                        Response Time
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                        }}>
                        Meeting Duration
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                        }}>
                        Customer Name
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                        }}>
                        Customer ID
                      </th>
                      <th
                        className="border-b"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                        }}>
                        Mobile No
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                        }}>
                        Email ID
                      </th>
                      <th
                        className="border-b"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                        }}>
                        Project
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          width: "100px",
                          padding: "5px",
                        }}>
                        Attendant
                      </th>
                      <th
                        className="border-b"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "left",
                          padding: "5px",
                        }}>
                        Actions
                      </th>
                      {/* <th className="py-2 px-2 lg:px-6 border-b"> </th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {data
                      .filter(({ name }) =>
                        name.toLowerCase().includes(valueinput.toLowerCase())
                      )
                      .map((visitor, index) => (
                        <tr
                          style={{ paddingLeft: "5px" }}
                          className="py-1 border-b text-[9px] lg:text-[14px]"
                          key={index}>
                          <td style={{ paddingLeft: "5px" }}>
                            {DateupdatedAt(visitor.updatedAt)}
                          </td>
                          <td className="py-1 border-b text-center">
                            {ResponseAt(visitor.updatedAt)}
                          </td>
                          <td className="py-1 border-b text-center">
                            {visitor.timeDuration}
                          </td>
                          <td className="py-1 border-b text-center">
                            {visitor.name}
                          </td>
                          <td className="py-1 border-b text-center">
                            <Link
                              to={`/Direct_Visitors/${visitor.customerId}`}
                              style={{
                                fontFamily: "Manrope",
                                fontSize: "14px",
                                fontWeight: "700",
                                lineHeight: "19.12px",
                                textAlign: "left",
                                color: "#000AFF",
                                textDecoration: "underline",
                              }}>
                              {visitor.customerId}
                            </Link>
                          </td>
                          <td className="py-1 border-b text-center">
                            {visitor.mobile}
                          </td>
                          <td className="py-1 border-b text-center">
                            {visitor.email}
                          </td>
                          <td className="py-1 border-b text-center">
                            {visitor.projectName}
                          </td>

                          <td className="py-1 border-b  text-center">
                            {visitor.attendantName}
                          </td>

                          <td className="py-1 border-b flex gap-2">
                            <Link to={`/Direct_Visitors/${visitor.customerId}`}>
                              <PiNotePencilBold
                                // onClick={() => handleEdit(visitor._id)}
                                style={{
                                  cursor: "pointer",
                                  fontSize: "18px",
                                  color: "#632E04",
                                }}
                              />
                            </Link>

                            <RiDeleteBin6Line
                              onClick={() => {
                                setShowPopup(true);
                                setDeleteId(visitor._id);
                                setDeleteCustomerId(visitor.customerId);
                              }}
                              style={{
                                cursor: "pointer",
                                fontSize: "18px",
                                color: "#930000",
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <p> No records founds...!</p>
              )}
            </div>
          </div>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="Delete-popup w-[257px] h-[192px]  py-[12px] px-[24px] rounded-md bg-white shadow-md z-50 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-manrope text-[20px] font-medium">
                    Are you sure you want to delete this row?
                  </p>
                  <p className="font-manrope text-[12px] font-medium text-[#6A6A6A] mt-2">
                    This action cannot be undone.
                  </p>
                  <div className="delete-cont flex justify-center items-center w-[197px] ml-1 h-[33px] gap-6 mt-4">
                    <button
                      className="w-[85px]  h-[33px] p-2.5 bg-[#FFD9D9] rounded-md text-[#C71212] flex items-center justify-center"
                      onClick={deletedAt}
                    >
                      Delete
                    </button>
                    <button
                      className="w-[85px]  h-[33px] p-2.5 rounded-md border-black border flex items-center justify-center"
                      onClick={() => setShowPopup(false)}
                    >
                      Cancel
                    </button>
                  </div>
                  <p className="font-manrope text-[12px] text-[#6A6A6A] font-medium text-center mt-2">
                    Select "Delete" to confirm.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;