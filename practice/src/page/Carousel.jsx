import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

export default function Project() {
  const [item, setItem] = useState([
    {
      id: 1,
      url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
    },
    {
      id: 2,
      url: "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
    },
    {
      id: 3,
      url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
    },
  ]);
  // 현재 index value 저장
  const [currentIndex, setCurrentIndex] = useState(0);
  // 앞뒤로 추가할 데이터 개수(카운터로 바꿔도 됨)
  const fakeData = 2;
  // 앞뒤로 속임수 데이터를 만드는 함수
  const setSliders = () => {
    const addedFront = [];
    const addedRear = [];
    
    for(let index = 0; index < fakeData; index ++) {
      addedRear.push(item[index % item.length]);
      //앞쪽은 2번 3번 순으로 배열을 생성해야 되니 unshift 사용
      addedFront.unshift(item[item.length - 1 - (index % item.length)]);
    }
    // 스프레드연산자로 배열 재구성
    return [...addedFront, ...item, ...addedRear];
  };
  // 배열의 0번 index, 마지막 index에서 눈속임주는 함수
  const HandlerSlide = (index) => {
    if(index < 0) {
      direction.current = "left";
      index = slides.length - 1;
      setOffTransition(true);
    } else if(index === slides.length - 1) {
      direction.current = "right";
      index = slides.length - 1;
    }
    setCurrentIndex(index);
  };
  // 방향이 오른쪽인지 왼쪽인지 판별
  const handleSwipe = (direction) => {
    HandlerSlide(currentIndex + direction);
  };
  // fakeData를 포함한 map을 돌릴 배열 생성
  const slides = setSliders();

  // transition on, off toggle
  const [offTransition, setOffTransition] = useState(false);

  // 왼쪽인지, 오른쪽인지 판단하는 참조값
  const direction = useRef("left");
  const transition = offTransition ? "0s" : "1s";

  // 예상치 않는 동작을 막기 위해 Btn에 disabled 추가
  const [disabled, setDisabled] = useState(false);

  // 버튼이 disabled 되는 시간은 transition이 지속되는 1초만
  const buttonControll = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1000);
  };

  useEffect(() => {
    if (
      // 오른쪽 맨 마지막 index에서 조건 발동
      direction.current === "right" && currentIndex === slides.length - 1
    ) {
      // transition 잠시 껐다가 0번 index로 넘어가기
      setTimeout(() => {
        setOffTransition(true);
        setCurrentIndex(0);
      }, 1000);
      // 0.1초 후 transition 켜기
      setTimeout(() => {
        setOffTransition(false);
      }, 1100);
    } else if(
      // 이번엔 0번 index에서 제일 마지막 index로 넘어 갈 때,
      direction.current === "left" && currentIndex === slides.length - 1
    ) {
      // 0번에서 마지막 index로 갈 때는 위의 조건과 겹치지 않기 위해,
      // 먼저 transition을 끄고 넘어간 다음 0.01초 뒤에 켜서 눈속임을 줌
      setTimeout(() => {
        setOffTransition(false);
        setCurrentIndex(slides.length - 2);
      }, [10]);
    }
  }, [currentIndex]);

  return(
    <>
      <Container>
        <button
          disabled = {disabled}
          onClick={() => {
            handleSwipe(-1);
            buttonControll();
          }}
        >뒤로</button>
        <Carousel>
          <CarouselBox
          style={{
            // carousel 효과 주는 부분
            transform: `translateX(${-100 * currentIndex}%)`,
            transition,
          }}>
            {slides.map(({id, url}, idx) => {
              return (
                <CarouselItem
                  key = {idx}
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                >
                  {id}
                </CarouselItem>
              );
            })}
          </CarouselBox>
        </Carousel>
        <button
          disabled = {disabled}
          onClick={() => {
            handleSwipe(1);
            buttonControll();
          }}
        >앞으로</button>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  padding: 5rem;
`

const Carousel = styled.div`
  background: coral;
  width: 500px;
  height: 500px;
  overflow: hidden;
`

const CarouselBox = styled.div`
  display: flex;
`

const CarouselItem = styled.div`
  width: 500px;
  height: 500px;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  flex: none;
`