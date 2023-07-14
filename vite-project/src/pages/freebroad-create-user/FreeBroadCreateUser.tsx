import { useNavigate } from "react-router-dom";
import Nav from "@/component/Navigate/Nav";
import Footer from "@/component/Footter/Footer";
import FreeBroadQuill from "../freebroad-edit/FreeBroadQuill";
import { Controller, useForm } from "react-hook-form";
import * as yub from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import {
  freeBoardDetail,
  postFreeBoard,
  postFreeBoardUser,
  putFreeBoard,
} from "@/services/apiFreeBroad";
import { UserPostFreeBoard } from "@/model/Auth.model";
import ConfirmPassword from "../freebroad-detail/ConfirmPassword";

const schema = yub.object().shape({
  title: yub.string().required("입력하세요"),
  password: yub.string().required("입력하세요"),
  author: yub.string().required("입력하세요"),
});
const FreeBroadCreateUser = () => {
  const { infor } = useLocation().state;
  const [contentt, setContent] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<UserPostFreeBoard>({
    mode: "onChange",
    defaultValues: {
      title: "",
      author: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (infor !== "") {
      (async () => {
        try {
          const response = await freeBoardDetail({ id: infor.toString() });
          setContent(response.data.data.content);
          setValue("title", response.data.data.title);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const onSubmit = (data: UserPostFreeBoard) => {
    try {
      (async () => {
        await postFreeBoardUser({
          title: data.title,
          author: data.author,
          password: data.password,
          content: contentt,
        });
      })();
      navigate(-1);
      toast.success("Created Edit successfully");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeContent = (value: string) => {
    setContent(value);
  };

  return (
    <div className=" pt-[100px] ">
      
      <Nav colorText="text-black" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-center ">
          <div className="w-3/5">
            <h1 className=" mt-[60px] mb-[20px] text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text inline-block">
              부산 전체보기
            </h1>
            <div className="flex  mb-[40px] max-[1280px]:flex-col">
              <div className="flex grow-[1] relative border-[2px] border-solid">
                <h1 className="w-[200px] text-[18px] font-bold text-center bg-[#b9e0ff] py-[14px]">
                  작성자 이름
                </h1>
                <Controller
                  control={control}
                  name="author"
                  render={({ field: { onChange } }) => (
                    <div className="  flex ">
                      <input
                        className=" outline-none pl-[20px] w-full"
                        type="text"
                        placeholder="제목을 입력해주세요."
                        {...register("author")}
                      />

                      <p className="text-red-500 absolute bottom-[-30px] left-0">
                        {errors.author?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
              <div className="flex grow-[1] relative border-[2px] border-solid max-[1280px]:mt-[40px]">
                <h1 className="w-[200px] text-[18px] font-bold text-center bg-[#b9e0ff] py-[14px]">
                  비밀번호
                </h1>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange } }) => (
                    <div className="  flex ">
                      <input
                        className=" outline-none pl-[20px] w-full"
                        type="text"
                        placeholder="제목을 입력해주세요."
                        {...register("password")}
                      />

                      <p className="text-red-500 absolute bottom-[-30px] left-0">
                        {errors.password?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex w-full  relative  bg-white border-[2px] border-solid">
              <h1 className="  w-[200px] text-[18px] font-bold text-center bg-[#b9e0ff] py-[14px]">
                제목
              </h1>

              <Controller
                control={control}
                name="title"
                render={({ field: { onChange } }) => (
                  <div className="grow-[7]  flex ">
                    <input
                      className=" outline-none pl-[20px] w-full"
                      type="text"
                      placeholder="제목을 입력해주세요."
                      {...register("title")}
                    />

                    <p className="text-red-500 absolute bottom-[-30px] left-0">
                      {errors.title?.message}
                    </p>
                  </div>
                )}
              />
            </div>

            <div className="mt-[40px]">
              <FreeBroadQuill
                content={contentt}
                handleChangeContent={handleChangeContent}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-4/5 mb-[20px] cursor-pointer">
          <button
            type="submit"
            className="mr-[20px] from-blue-700 to-blue-400 bg-gradient-to-r px-[40px] py-[10px] text-white"
          >
            수정
          </button>
          <div
            onClick={() => navigate(-1)}
            className="px-[40px] py-[10px] bg-[#D9D9D9] border-solid border-[1px] border-[#707070cc]"
          >
            취소
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default FreeBroadCreateUser;
