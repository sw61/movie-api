import { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const LimitMenu = ({ setLimit, limitNum }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Container>
        <div className="dropdown">
          <div className="dropBtn">
            <BtnBox onClick={dropClick}>
              <BtnHead>Setting Page Limit</BtnHead>
              {isOpen === true ? (
                <IoMdArrowDropupCircle className="upBtn" />
              ) : (
                <IoMdArrowDropdownCircle className="downBtn" />
              )}
            </BtnBox>
          </div>
          <div className="dropContent">
            {isOpen &&
              limitNum.map((limitItem) => (
                <BtnBox
                  key={limitItem.id}
                  onClick={() => setLimit(limitItem.limit)}
                >
                  {limitItem.limit}
                </BtnBox>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
};
export default LimitMenu;
const Container = styled.div`
  padding: 0 320px;
  margin: 0 auto;
  background-color: black;

  button {
    width: 180px;
    height: 40px;
  }
  .dropdown {
    position: fixed;
    top: 70px;
    left: 70px;
  }
  .dropContent {
    width: 180px;
    position: absolute;
  }
`;
const BtnBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  .upBtn,
  .downBtn {
    font-size: 20px;
  }
`;
const BtnHead = styled.span``;
