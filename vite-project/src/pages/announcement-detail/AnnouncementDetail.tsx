import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notice, noticeDetail } from "@/services/apiNotice";
import { DataNotice } from "@/model/Auth.model";
import Nav from "@/component/Navigate/Nav";
import dayjs from "dayjs";
import Footer from "@/component/Footter/Footer";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";
import { useLocation } from "react-router-dom";
import Loading from "../loading/Loading";
const AnnouncementDetail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispath = useDispatch();
  const [data, setData] = useState<DataNotice>();
  const [id, setId] = useState(param.id);

  const getDataAnnouncementDetail = async () => {
    dispath(activeLoading(true));
    try {
      const response = await noticeDetail({
        search_by: state.search_by,
        search_value: state.search_value,
        id: id,
      });
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
    dispath(activeLoading(false));
  };
  useEffect(() => {
    getDataAnnouncementDetail();
  }, [id]);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="h-screen relative">
      <Loading />
      <Nav colorText="text-black" />
      <div className="h-full flex justify-between flex-col ">
        {/* main  */}
        <div className="w-full flex justify-center mt-[160px] mb-[120px]  ">
          <div className="w-3/5">
            {/* title  */}
            <div>
              <h1 className="text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text w-[120px] ">
                공지사항
              </h1>
            </div>
            {/* information  */}
            <div className="w-full bg-[#b4dcfff7] my-[40px] px-[20px] py-[10px] font-bold">
              <h1>{data?.title}</h1>
            </div>
            <div>
              <div className="flex justify-around">
                {" "}
                <div className="grow-[2] px-[20px]">
                  <h1 className="font-bold">작성자</h1>
                </div>
                <div className="grow-[6] flex justify-around border-x-[1px] border-neutral-600">
                  <p>{data?.author}</p>
                  <h1>작성일</h1>
                </div>
                <div className="grow-[2] px-[24px]">
                  <p>{dayjs(data?.updated_at).format("YYYY-MM-DD")}</p>
                </div>
              </div>
              {/* content  */}
              <div className="mt-[16px] py-[6px] border-y-[1px] border-neutral-300">
                <div
                  className="mx-[20px] px-[10px] ql-editor "
                  dangerouslySetInnerHTML={{ __html: data?.content || "" }}
                />
              </div>
            </div>
            {/* navigate */}
            <div className="flex w-full justify-end mt-[20px]">
              {/* pre  */}
              {data?.previous ? (
                <div
                  onClick={() => setId(data.previous)}
                  className="px-[20px] py-[10px] bg-[#D9D9D9] cursor-pointer"
                >
                  이전 글
                </div>
              ) : (
                ""
              )}
              {/* back */}
              <div
                onClick={() => navigate(-1)}
                className="mx-[20px] bg-gradient-to-r from-blue-700 to-blue-400 px-[20px] py-[10px] text-white cursor-pointer"
              >
                목록으로
              </div>
              {/* next */}
              {data?.next ? (
                <div
                  onClick={() => setId(data.next)}
                  className="px-[20px] py-[10px] bg-[#D9D9D9] cursor-pointer"
                >
                  다음 글
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="  w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
