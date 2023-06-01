import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useEffect, useRef, useState } from "react";
import * as S from "./Menu.styled";
import "moment/locale/ko";
import { useRecoilValue } from "recoil";
import { clubID } from "../../util/atoms";
import { useNavigate } from "react-router-dom";
import { tokenValidate } from "../../util/api";
import { getCookie } from "../../util/cookie";

function Menu() {
  const id = useRecoilValue(clubID);

  const navigate = useNavigate();

  const Linkto = async () => {
    // const response = await tokenValidate(localStorage.getItem("token"));
    const response = await tokenValidate(getCookie("token"));
    //console.log(response);
    if (response) {
      navigate("/checkattendance");
    } else {
      if (id > 0) {
        navigate(`/attendance/${id}`);
      } else {
        alert("동아리를 먼저 검색해주세요.");
        navigate("/");
      }
    }
  };

  const Linkto2 = async () => {
    // const response = await tokenValidate(localStorage.getItem("token"));
    const response = await tokenValidate(getCookie("token"));
    //console.log(response);
    if (response) {
      navigate("/moveto");
    } else {
      if (id > 0) {
        navigate(`/anonymous/${id}`);
      } else {
        alert("동아리를 먼저 검색해주세요.");
        navigate("/");
      }
    }
  };

  useEffect(() => {
    //console.log(id);
  }, [id]);

  return (
    <>
      <S.Wrap>
        <S.Bg>
          <Navbar />
          <S.BtnDiv>
            <S.Btn onClick={Linkto}>
              <S.Icon>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "39px",
                    fontVariationSettings: "'wght' 300",
                  }}
                >
                  how_to_reg
                </span>
              </S.Icon>
              출석체크
            </S.Btn>
            <S.Btn onClick={Linkto2}>
              <S.Icon>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "37px",
                    fontVariationSettings: "'wght' 300",
                  }}
                >
                  record_voice_over
                </span>
              </S.Icon>
              대나무숲
            </S.Btn>
          </S.BtnDiv>
          <Bottombar first={true} second={false} third={false} />
        </S.Bg>
      </S.Wrap>
    </>
  );
}

export default Menu;
