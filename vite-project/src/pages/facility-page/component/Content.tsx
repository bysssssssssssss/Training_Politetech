import Map from "./Map";
import { useState, useEffect, useRef } from "react";
import { FacilityData } from "@/model/Auth.model";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";
import { useDispatch } from "react-redux";
import Loading from "@/component/loading/Loading";
import DetailFacility from "./DetailFacility";
const Content = ({ data, isLoad, isError }: any) => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const isClear = useRef<HTMLDivElement>(null);
  const [offFill, setOffFill] = useState(false);
  const [titleLocation, setTitleLocation] = useState("부산");
  const [activeDetail, setActiveDetail] = useState(false);
  const [itemSelected, setItemSelected] = useState<FacilityData>();

  const show = useRef<HTMLDivElement>(null);
  let listData: any = [];
  const [placeholder, setPlaceholder] = useState("부산");
  const updateLocation = (local: string) => {
    setPlaceholder(local);
    setLocation(local);
    setTitleLocation(local);
    isClear.current?.classList.remove(
      ..."bg-gradient-to-r from-blue-700 to-blue-400 text-white".split(" ")
    );
    isClear.current?.classList.add(
      ..."bg-white text-[#60a5fa] border-solid border-[1px] border-[#60a5fa]".split(
        " "
      )
    );
  };
  location === ""
    ? data.forEach((item: FacilityData) => listData.push(item))
    : data.forEach((item: FacilityData) => {
        if (item.district === location.trim()) {
          listData.push(item);
        }
      });

  useEffect(() => {
    console.log(listData, location);

    if (listData.length === 0) dispatch(activeLoading(true));
    if ((listData.length === 0 && location !== "") || listData.length !== 0) {
      dispatch(activeLoading(false));
    }
    if (isError) dispatch(activeLoading(false));
  });
  const clearFilter = () => {
    setOffFill(true);
    setPlaceholder("부산");
    setLocation("");
    isClear.current?.classList.remove(
      ..."bg-white text-[#60a5fa] border-solid border-[1px] border-[#60a5fa]".split(
        " "
      )
    );
    isClear.current?.classList.add(
      ..."bg-gradient-to-r from-blue-700 to-blue-400 text-white".split(" ")
    );
  };
  const handleSelectArea = () => {
    setOffFill(false);
  };
  const showDetail = (item: FacilityData) => {
    console.log(123);

    setActiveDetail(true);
    setItemSelected(item);
  };
  const handleCloseDetail = () => {
    setActiveDetail(false);
  };
  const showListData = () => {
    show.current?.classList.toggle("hidden");
  };
  return (
    <div
      className="w-full flex justify-center mt-[60px] mb-[80px]  "
      onClick={() => show.current?.classList.add("hidden")}
    >
      <Loading />
      {activeDetail === true ? (
        <DetailFacility
          itemSelected={itemSelected}
          handleCloseDetail={handleCloseDetail}
        />
      ) : (
        ""
      )}
      <div className="w-3/5">
        {/* title  */}
        <div>
          <h1 className="text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text w-[120px] ">
            시설현황
          </h1>
        </div>
        <div className="max-[1280px]:h-full flex justify-between mt-[10px] w-full max-[1280px]:flex-col ">
          <div className=" min-[1281px]:w-[420px] max-[1280px]:full">
            <h1
              ref={isClear}
              onClick={clearFilter}
              className="max-[1280px]:hidden cursor-pointer text-[15px] bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-white  px-[10px] py-[10px] rounded-md my-[60px] ml-[40px]"
            >
              부산 전체보기
            </h1>
            <div className="w-full min-[1280px]:pr-[20px]">
              <Map
                updateLocation={updateLocation}
                offFill={offFill}
                handleSelectArea={handleSelectArea}
                placeholder={placeholder}
              ></Map>
            </div>
          </div>

          <div className="min-[1281px]:w-[420px] max-[1280px]:full">
            <div className="flex  text-[22px] font-bold max-[1280px]:hidden">
              <span className="text-blue-700">{placeholder}</span>
              <span>수거사각지대</span>
            </div>
            <div className=" max-[1280px]:block hidden w-full relative p-[14px] border-[1px] border-[#0066c1] border-solid ">
              <div
                onClick={(e) => {
                  showListData();
                  e.stopPropagation();
                }}
                // ref={clickButton}
                className=" relative "
              >
                <input
                  id="input"
                  value={placeholder}
                  type="text"
                  className=" w-full outline-none  cursor-pointer font-extrabold text-[#0066c1] bg-transparent"
                  disabled
                />

                <i className="bi bi-caret-down-fill absolute right-[6px] pointer-events-none"></i>
              </div>
              <div
                className="absolute left-0 right-0 border-[1px] border-[#0066c1] border-solid h-[400px] top-[60px] bg-white overflow-auto hidden"
                ref={show}
              >
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("부산전체");
                    e.stopPropagation();
                    setLocation("");
                  }}
                >
                  부산전체
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("기장군");
                    e.stopPropagation();
                    setLocation("기장군");
                  }}
                >
                  기장군
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("금정구");
                    e.stopPropagation();
                    setLocation("금정구");
                  }}
                >
                  금정구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("해운대구");
                    e.stopPropagation();
                    setLocation("해운대구");
                  }}
                >
                  해운대구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("북구");
                    e.stopPropagation();
                    setLocation("북구");
                  }}
                >
                  북구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("동래구");
                    e.stopPropagation();
                    setLocation("동래구");
                  }}
                >
                  동래구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("연제구");
                    e.stopPropagation();
                    setLocation("연제구");
                  }}
                >
                  연제구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("수영구");
                    e.stopPropagation();
                    setLocation("수영구");
                  }}
                >
                  수영구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("부산진구");
                    e.stopPropagation();
                    setLocation("부산진구");
                  }}
                >
                  부산진구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("사상구");
                    e.stopPropagation();
                    setLocation("사상구");
                  }}
                >
                  사상구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("동구");
                    e.stopPropagation();
                    setLocation("동구");
                  }}
                >
                  동구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("남구");
                    e.stopPropagation();
                    setLocation("남구");
                  }}
                >
                  남구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("서구");
                    e.stopPropagation();
                    setLocation("서구");
                  }}
                >
                  서구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("중구");
                    e.stopPropagation();
                    setLocation("중구");
                  }}
                >
                  중구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("영도구");
                    e.stopPropagation();
                    setLocation("영도구");
                  }}
                >
                  영도구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("사하구");
                    e.stopPropagation();
                    setLocation("사하구");
                  }}
                >
                  사하구
                </div>
                <div
                  className="p-[14px] font-bold hover:bg-[#B7DCFF]"
                  onClick={(e) => {
                    show.current?.classList.add("hidden");
                    setPlaceholder("강서구");
                    e.stopPropagation();
                    setLocation("강서구");
                  }}
                >
                  강서구
                </div>
              </div>
            </div>
            <div className="mt-[40px] w-full h-[560px]  border-[1px] border-[#b9b9b9] border-solid rounded-sm overflow-auto">
              {listData &&
                listData.map((item: FacilityData, index: number) => (
                  <div
                    key={index}
                    className="hover:bg-[#b8d4ff79] w-full cursor-pointer"
                    onClick={() => showDetail(item)}
                  >
                    <div className="mx-[20px] py-[4px] border-b-[1px] border-solid border-[#b5b5b5cc] ">
                      <h1 className=" font-bold text-[20px]">
                        {item.spotname}
                      </h1>
                      <div className="flex">
                        <div>
                          <img
                            src={`data:image/png;base64, ${item.img}`}
                            alt="img_infor"
                            className="w-[160px] h-[100px]"
                          />
                        </div>
                        <div className="ml-[20px]">
                          <div className="flex items-center ">
                            <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                            <span>위치 : {item.address}</span>
                          </div>
                          <div className="flex items-center ">
                            <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                            <span> 길이 : {item.length}</span>
                          </div>
                          <div className="flex items-center ">
                            <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                            <span> 폭 : {item.breadth}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="text-center py-[10px] text-[20px] font-medium">
                {isLoad === true ? <div>Loading ...</div> : ""}
              </div>
              <div className="text-center py-[10px]">
                {(listData.length === 0 && location !== "" && !isLoad) ||
                (!isLoad && listData.length === 0) ? (
                  <div>현재 사용 가능한 데이터가 없습니다.</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
